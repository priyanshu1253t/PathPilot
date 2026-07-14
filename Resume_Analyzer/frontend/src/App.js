import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && !selectedFile.name.endsWith('.pdf')) {
      setError('Please select a PDF file');
      setFile(null);
    } else {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResumeData(response.data);
      setError(null);
    } catch (err) {
      setError('Error uploading file: ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Parser</h1>
        <div className="upload-container">
          <form onSubmit={handleSubmit}>
            <div className="file-input-container">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="file-input"
              />
              <button type="submit" disabled={loading || !file} className="upload-button">
                {loading ? 'Processing...' : 'Parse Resume'}
              </button>
            </div>
          </form>

          {error && <div className="error-message">{error}</div>}

          {resumeData && (
            <div className="results-container">
              <h2>Resume Information</h2>
              <div className="info-grid">
                <div className="info-section personal-info">
                  <h3>Personal Information</h3>
                  <p><strong>Name:</strong> {resumeData.name || 'Not found'}</p>
                  <p><strong>Email:</strong> {resumeData.email || 'Not found'}</p>
                  <p><strong>Phone:</strong> {resumeData.phone || 'Not found'}</p>
                </div>

                <div className="info-section">
                  <h3>Education</h3>
                  {resumeData.education && resumeData.education.length > 0 ? (
                    <ul>
                      {resumeData.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No education information found</p>
                  )}
                </div>

                <div className="info-section">
                  <h3>Experience</h3>
                  {resumeData.experience && resumeData.experience.length > 0 ? (
                    <ul>
                      {resumeData.experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No experience information found</p>
                  )}
                </div>

                <div className="info-section">
                  <h3>Skills</h3>
                  {resumeData.skills && resumeData.skills.length > 0 ? (
                    <div className="skills-grid">
                      {resumeData.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  ) : (
                    <p>No skills found</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
