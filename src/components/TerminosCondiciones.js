import React from 'react';
import { Document, Page } from 'react-pdf';
import './TerminosCondiciones.css';

function TerminosCondiciones() {
  const pdfUrl = '/TerminosCondiciones.pdf';  // El PDF está en la carpeta public!!!! no esta andando el react-pdf

  return (
    <div className="terminos-condiciones-section">
      <h1>Términos y Condiciones</h1>
      <div className="pdf-viewer">
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
