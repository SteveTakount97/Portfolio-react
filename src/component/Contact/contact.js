// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer le message
    console.log('Message envoyé', formData);
  };

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
        <label>Nom</label>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
        <div className='input-wrapper'>
        <label> Email</label>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className='input-wrapper'>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        </div>
        <div className='input-remember'>
        <button type="submit">Envoyer</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
