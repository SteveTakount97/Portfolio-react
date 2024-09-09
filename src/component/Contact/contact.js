// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    
  const [successMessage, setSuccessMessage] = useState(''); // État pour gérer le message de succès

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
    emailjs.sendForm('service_vs6ga7p', 'template_1nj42fa', e.target, 'uYeAA5Lm4q1OEwzKn')
    .then((result) => {
      console.log(result.text);
      setSuccessMessage ('Formulaire de contact bien transmis');

       // Efface le message après un délai, par exemple 3 secondes
       setTimeout(() => {
        setSuccessMessage('');
        }, 3000);


        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
    }, (error) => {
      console.log(error.text);
      alert('Erreur lors de l\'envoi du message.');
    });
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
        <button type="submit" className='btn'>Envoyer</button>
        </div>
      </form>
      {successMessage && <p className='succesMessage'>{successMessage}</p>}
    </section>
  );
};

export default Contact;
