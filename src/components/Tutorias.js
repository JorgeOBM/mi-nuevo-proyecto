import React from 'react';
import './Tutorias.css';

function Tutorias() {
  const tutorias = [
    { semestre: 1, descripcion: 'Casos de uso del primer semestre', especialidad: 'Programación', link: '/solicitar-programacion' },
    { semestre: 2, descripcion: 'PDT Programación', especialidad: 'Base de datos', link: '/solicitar-bd' },
    { semestre: 1, descripcion: 'Casos de uso del primer semestre', especialidad: 'Testing', link: '/solicitar-testing' },
    // Agrega más tutorías si es necesario
  ];

  return (
    <div className="tutorias-section">
      <h1>Tutorías</h1>
      <h2>Tutores</h2>
      <table className="tabla-tutorias">
        <thead>
          <tr>
            <th>Semestre</th>
            <th>Descripción</th>
            <th>Especialidad</th>
            <th>Solicitar</th>
          </tr>
        </thead>
        <tbody>
          {tutorias.map((tutoria, index) => (
            <tr key={index}>
              <td>{tutoria.semestre}</td>
              <td>{tutoria.descripcion}</td>
              <td>{tutoria.especialidad}</td>
              <td>
                <a href={tutoria.link} className="solicitar-btn">
                  Solicitar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tutorias;

