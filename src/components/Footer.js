import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#acercaDe">Acerca de nosotros</a>
        <a href="#privacidad">Término y condiciones</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="social-links">
        <a href="#">🌐</a>
        <a href="#">📘</a>
        <a href="#">🐦</a>
        <a href="#">📷</a>
      </div>
      <p>&copy; FrayMerSoft 2024 | Información relacionada con el coordinador de educación.</p>
    </footer>
  );
}

export default Footer;
