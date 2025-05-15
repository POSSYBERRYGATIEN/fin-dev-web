import React from 'react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <main>
      <section className="contact-info">
        <h2>Contactez-Nous</h2>
        <p>N'hésitez pas à nous contacter pour toute question ou demande de devis.</p>
        <ul>
          <li>Email: gatienpossyberry@gmail.com</li>
          <li>Téléphone: +229 01 98 32 20 12</li>
          <li>Adresse: [Oiuidah]</li>
          {/* Tu peux ajouter une carte Google Maps intégrée ici */}
        </ul>
      </section>
      <section className="contact-form-section">
        <h3>Formulaire de Contact</h3>
        <ContactForm />
      </section>
    </main>
  );
}

export default ContactPage;