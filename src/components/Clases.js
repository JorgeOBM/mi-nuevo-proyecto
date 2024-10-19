import React from 'react';
import './Clases.css';

function Clases() {
  const clases = [
    { curso: 'LTI', horario: '19:00-20:00', link: 'https://meet.google.com/ydr-egpk-ikp?authuser=1' },
    { curso: 'TADS', horario: '13:00-17:00', link: 'https://meet.google.com/ydr-egpk-ikp?authuser=1' },
    { curso: 'TAA', horario: '09:00-17:00', link: 'https://meet.google.com/ydr-egpk-ikp?authuser=1' },
  ];

  return (
    <div className="clases-section">
      <h1>Mis Clases</h1>
      <table className="clases-table">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Horario</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((clase, index) => (
            <tr key={index}>
              <td>{clase.curso}</td>
              <td>{clase.horario}</td>
              <td>
                <a href={clase.link} target="_blank" rel="noopener noreferrer">
                  {clase.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clases;
