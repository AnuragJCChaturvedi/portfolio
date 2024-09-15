import React, { useState } from 'react';
import './index.css'; // Import the updated CSS file

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to manage button disable

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Disable the button on form submission
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatusMessage('Thanks for connecting!');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatusMessage(result.errors.map((error) => error.message).join(', '));
        } else {
          setStatusMessage('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatusMessage('Oops! There was a problem submitting your form.');
    }
    
    setIsSubmitting(false); // Re-enable the button after the response is handled
  };

  return (
    <section className='section contact center' id='contact'>
    <h2 className='section__title'>Connect With Me</h2>
    <form id="contact-form" action="https://formspree.io/f/movazlyl" method="POST" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          name="name" 
          id="name" 
          required 
          placeholder="Enter your name"
          className="form-input"
        />
        <label htmlFor="name" className="floating-label">Name</label>
      </div>

      <div className="form-group">
        <input 
          type="email" 
          name="email" 
          id="email" 
          required 
          placeholder="Enter your email"
          className="form-input"
        />
        <label htmlFor="email" className="floating-label">Email</label>
      </div>
      
      <div className="form-group">
        <textarea 
          name="message" 
          id="message" 
          rows="5" 
          required 
          placeholder="Enter your message"
          className="form-input"
        />
        <label htmlFor="message" className="floating-label">Message</label>
      </div>
      
      <button id="form-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      <p id="form-status">{statusMessage}</p>
    </form>
    </section>
  );
};

export default ContactForm;
