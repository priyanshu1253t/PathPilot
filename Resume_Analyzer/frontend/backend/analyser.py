from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import re
import spacy
from spacy.matcher import Matcher
from PyPDF2 import PdfReader
from io import BytesIO
import logging

app = FastAPI()
nlp = spacy.load("en_core_web_sm")
matcher = Matcher(nlp.vocab)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

@app.get("/")
async def root():
    return {"message": "Resume Uploader and Parser API is running."}

def extract_text_from_pdf(file_bytes):
    reader = PdfReader(BytesIO(file_bytes))
    return "".join([page.extract_text() or "" for page in reader.pages])

def clean(text):
    return re.sub(r'[^\x00-\x7F]+', '', text)

def extract_email(text):
    return re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

def extract_phone(text):
    phone_pattern = re.compile(r"(?:(?:\+91[\-\s]?|0)?[6-9]\d{9})")
    return list(set(phone_pattern.findall(text)))

def extract_name(text):
    doc = nlp(text)
    pattern = [{'POS': 'PROPN'}, {'POS': 'PROPN', 'OP': '?'}, {'POS': 'PROPN', 'OP': '?'}]
    matcher.add('NAME', [pattern])
    matches = matcher(doc)
    spans = [doc[start:end] for match_id, start, end in matches]
    return max(spans, key=lambda span: len(span.text)).text if spans else None`

def extract_education(text):
    lines = text.split('\n')
    education, capture = [], False
    for line in lines:
        line_lower = line.lower().strip()
        if any(k in line_lower for k in ["education", "academic", "qualification"]):
            capture = True
            continue
        if any(k in line_lower for k in ["skills", "experience", "certification", "project"]):
            capture = False
        if capture and line.strip() and not line.strip().endswith(":"):
            education.append(line.strip())
    return education

def extract_certifications(text):
    lines = text.split('\n')
    certs, capture = [], False
    for line in lines:
        l = line.lower().strip()
        if any(k in l for k in ["certification", "certificate"]):
            capture = True
            continue
        if any(k in l for k in ["education", "skills", "experience"]):
            capture = False
        if capture and len(line.strip()) > 4:
            certs.append(line.strip())
    return certs

def extract_skills(text):
    text = text.lower()
    known_skills = ["python", "java", "c++", "react", "django", "sql", "html", "css", "javascript"]
    return [skill for skill in known_skills if skill.lower() in text]

def parse_resume(text):
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "education": extract_education(text),
        "skills": extract_skills(text),
        "certifications": extract_certifications(text)
    }

@app.post("/upload/")
async def upload(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text_from_pdf(contents)
    clean_text = clean(text)
    parsed = parse_resume(clean_text)
    for i in parsed:
        print(i)
    return parsed
