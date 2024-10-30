import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);

      // Assuming the Flask backend sends a success message
      setResponseMessage(response.data.message || 'Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);

      // Display a specific message if the backend provides it, otherwise, a default message
      const errorMessage = error.response?.data?.message || 'Something went wrong while submitting the form.';
      setResponseMessage(errorMessage);
    }

  };

  return (
    <section id="contact-us" className="section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
        <p>{responseMessage}</p>
      </form>

    </section>

  );
};

export default ContactForm;
