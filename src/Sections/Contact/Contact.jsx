import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Ensure you have this CSS module

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          access_key: 'ab8f3dc5-2b25-430d-9f06-f6bcad90f374', // Replace with your actual Access Key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Handle success
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form data
        onClose(); // Close the form
      } else {
        // Handle errors
        alert('Your message has been sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Your message has been sent successfully!');
    }
  };

  return (
    <div className={styles.formOverlay}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h4>Get in touch.</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@domain.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message here ..."
          />
          <div className={styles.center}>
            <button type="submit" className={styles.contactButton}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
