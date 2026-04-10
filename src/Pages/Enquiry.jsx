import React from "react";
import { useState } from "react";
function Enquiry() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', summary: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {  
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.project.trim()) newErrors.project = 'Project type is required';
    if (!formData.summary.trim()) newErrors.summary = 'Project summary is required';
    return newErrors;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSuccessMessage('');
    try{
      const payload = {
        Fullname: formData.name,
        Emailaddress: formData.email,
        Projecttype: formData.project,
        Projectsummary: formData.summary,
      };
       const response = await fetch('http://localhost:4000/users/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)        
      });
      if (!response.ok) throw new Error('Enquiry submit failed');   
      setSuccessMessage('Enquiry submitted successfully.');
      setFormData({ name: '', email: '', project: '', summary: '' });
    }
    catch(err){
      console.error('Enquiry error:', err);
      alert('Something went wrong. Please try again.');
    }
  }
  return (
    <section className="enquiry-shell">
      <div className="enquiry-card">
        <a className="enquiry-close" href="/" aria-label="Close enquiry form">
          ×
        </a>
        <div className="enquiry-header">
          <span className="gallery-kicker">Enquiry</span>
          <h2>Tell us about your next story.</h2>
          <p>
            Share a few details and our production team will reach out with
            timelines, scope, and collaboration options.
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input id="name" type="text" name="name" value={formData.name}  onChange={handleChange} placeholder="Your name"/>
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email address
            <input id="email" type="email" name="email" value={formData.email} placeholder="you@example.com" onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Project type
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a project
              </option>
              <option value="series">Series</option>
              <option value="feature">Feature film</option>
              <option value="short">Short film</option>
              <option value="mv">Music video</option>
            </select>
            {errors.project && <span className="error">{errors.project}</span> }
          </label>
          <label>
            Project summary
            <textarea
            id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about the story, tone, or delivery goals."
            />
            {errors.summary && <span className="error">{errors.summary}</span>}
          </label>
          <button className="cta-btn" type="submit">
            Send enquiry
          </button>
          {successMessage ? (
            <p className="success-message">{successMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Enquiry;
