import React from 'react';
import { useNavigate } from 'react-router-dom';

function BotonVolver() {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <button onClick={handleVolver}>Volver</button>
  );
}

export default BotonVolver;