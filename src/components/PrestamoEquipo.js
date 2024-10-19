import React, { useState } from 'react';
import './PrestamoEquipo.css';  // Asegúrate de crear este archivo para los estilos

function PrestamoEquipo() {
  const [nombre, setNombre] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [estadoStock] = useState('DISPONIBLE');  // Simulación de estado de stock

  const handleFileChange = (event) => {
    setArchivo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Solicitud enviada por ${nombre}. Archivo: ${archivo ? archivo.name : 'Ningún archivo'}`);
  };

  const handleCancel = () => {
    setNombre('');
    setArchivo(null);
  };

  return (
    <div className="prestamo-section">
      <h1>Solicitud nuevo préstamo</h1>
      <form onSubmit={handleSubmit} className="prestamo-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese Nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="archivo">Constancia de domicilio</label>
          <input
            type="file"
            id="archivo"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Estado de Stock:</label>
          <span className="stock-status">{estadoStock}</span>
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="cancel-btn">Cancelar</button>
          <button type="submit" className="submit-btn">Solicitar</button>
        </div>
      </form>
    </div>
  );
}

export default PrestamoEquipo;
