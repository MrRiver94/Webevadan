import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Back.css';

function BotonVolver() {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="volver-container">
      <button className="volver-button" onClick={handleVolver}>
        &#8592; Volver
      </button>
    </div>
  );
}

export default BotonVolver;
