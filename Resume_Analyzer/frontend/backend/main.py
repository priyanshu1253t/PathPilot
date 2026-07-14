from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2
import io
import re
import spacy

app = FastAPI()

# Load spaCy model
nlp = spacy.load('en_core_web_sm')
matcher = nlp.matcher.Matcher(nlp.vocab)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def extract_name(text):
    doc = nlp(text)
    # Remove existing patterns to avoid duplicates
    if 'NAME' in matcher:
        matcher.remove('NAME')
    
    # Enhanced pattern for better name detection
    pattern = [
        {'POS': 'PROPN', 'IS_TITLE': True},
        {'POS': 'PROPN', 'IS_TITLE': True, 'OP': '?'},
        {'POS': 'PROPN', 'IS_TITLE': True, 'OP': '?'}
    ]
    matcher.add('NAME', [pattern])
    matches = matcher(doc)
    
    # Get all spans and filter out unlikely names
    spans = [doc[start:end] for match_id, start, end in matches]
    filtered_spans = [span for span in spans if len(span.text.split()) <= 3]
    
    return filtered_spans[0].text if filtered_spans else None

def extract_resume_info(pdf_content):
    # Read PDF content
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_content))
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()

    # Initialize dictionary for storing extracted information
    resume_info = {
        "name": "",
        "email": "",
        "phone": "",
        "education": [],
        "experience": [],
        "skills": []
    }

    # Extract name using NLP
    try:
        resume_info["name"] = extract_name(text)
    except Exception as e:
        resume_info["name"] = "Name extraction failed"

    # Extract email using regex
    email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    emails = re.findall(email_pattern, text)
    if emails:
        resume_info["email"] = emails[0]

    # Extract phone number with improved pattern
    phone_pattern = r'(?:\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'
    phones = re.findall(phone_pattern, text)
    if phones:
        resume_info["phone"] = phones[0]

    # Extract education with improved detection
    education_section = False
    education_keywords = ["education", "university", "college", "school", "degree", "bachelor", "master", "phd"]
    
    for line in text.split('\n'):
        line = line.strip()
        if any(keyword.lower() in line.lower() for keyword in education_keywords):
            education_section = True
            if line not in resume_info["education"]:
                resume_info["education"].append(line)
        elif education_section and line and not any(keyword in line.lower() for keyword in ["experience", "skills", "projects"]):
            resume_info["education"].append(line)
        elif education_section and (not line or any(keyword in line.lower() for keyword in ["experience", "skills", "projects"])):
            education_section = False

    # Extract skills with improved detection
    skills_section = False
    skills_keywords = ["skills", "technologies", "technical skills", "competencies"]
    
    for line in text.split('\n'):
        line = line.strip()
        if any(keyword.lower() in line.lower() for keyword in skills_keywords):
            skills_section = True
            continue
        elif skills_section and line:
            # Split skills by common separators
            skills = re.split(r'[,|•]', line)
            for skill in skills:
                skill = skill.strip()
                if skill and len(skill) > 1 and skill not in resume_info["skills"]:
                    resume_info["skills"].append(skill)
        elif skills_section and not line:
            skills_section = False

    return resume_info

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not file.filename.endswith('.pdf'):
        return {"error": "Please upload a PDF file"}
    
    try:
        content = await file.read()
        resume_info = extract_resume_info(content)
        return resume_info
    except Exception as e:
        return {"error": f"Error processing file: {str(e)}"}