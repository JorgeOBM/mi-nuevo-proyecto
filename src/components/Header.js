import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de que el componente Link esté importado
import './Header.css';
import logoUtec from '../Imagenes/LogoUtec.png';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);  // Controlamos la visibilidad del menú

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="header-top">
        <a href="/" className="logo">
          <img src={logoUtec} alt="UTEC Logo" />
        </a>
        <nav className="user-info">
          <span>Usuario Estudiante</span>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="menu-search-wrapper">
          {/* Botón de Menú y lista desplegable */}
          <div className="menu-wrapper">
            <button className="menu-btn" onClick={toggleMenu}>Menú</button>  {/* Evento onClick */}
            {menuVisible && (  // Solo muestra el menú si menuVisible es true
              <ul className="dropdown-menu">
                <li><Link to="/clases" onClick={toggleMenu}>Clases</Link></li>
                <li><Link to="/prestamo-equipo" onClick={toggleMenu}>Préstamo de equipos</Link></li>
                <li><Link to="/gestion-becas" onClick={toggleMenu}>Gestión de Becas</Link></li>
                <li><Link to="/tutorias" onClick={toggleMenu}>Tutorías entre pares</Link></li>
              </ul>
            )}
          </div>

          {/* Barra de Búsqueda */}
          <div className="search-bar">
            <input type="text" placeholder="Búsqueda" />
            <button type="submit">🔍</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
