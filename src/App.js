import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Clases from './components/Clases';
import PrestamoEquipo from './components/PrestamoEquipo';
import GestionBecas from './components/GestionBecas'; 
import Tutorias from './components/Tutorias';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <main>
          <Routes>
            <Route path="/clases" element={<Clases />} />
            <Route path="/prestamo-equipo" element={<PrestamoEquipo />} />
            <Route path="/gestion-becas" element={<GestionBecas />} /> 
            <Route path="/tutorias" element={<Tutorias />} /> 
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

