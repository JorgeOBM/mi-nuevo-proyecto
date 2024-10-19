import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>¿Necesitas contactarnos?</h2>
      <p>Mándanos un mail con tu consulta y ayudaremos a la brevedad!</p>
      <form>
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;

