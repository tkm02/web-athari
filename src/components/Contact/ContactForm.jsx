import React, { useState } from 'react';
import './Contact.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
   
  };

  return (
    <div className='contact'>
        <div className="form-container">
          <h2>Contactez Nous</h2>
          <p>
            Pour toute question, remplissez le formulaire ci-dessous ou utilisez les coordonnées fournies.
            Nous sommes là pour vous aider !
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Nom & Prénoms"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse mail"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                placeholder="Nom de l'entreprise"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <textarea
              name="message"
              placeholder="Votre Message ici..."
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-button">
              Soumettre
            </button>
          </form>
        </div>
    </div>
  );
};

export default ContactForm;
