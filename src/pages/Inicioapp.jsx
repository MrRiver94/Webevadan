import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Inicioapp.css';
import { Link } from "react-router-dom";
import Hexagons from '../assets/video/Hexagons.mp4';

function Inicioapp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Estado para el mensaje de error
  const navigate = useNavigate(); // Inicializa useNavigate 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpia cualquier error anterior

    try {
      const response = await fetch('https://flask-render-8y9z.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token:', data.token);
        // Guardar el token (considera HttpOnly cookies para mayor seguridad)
        localStorage.setItem('token', data.token); // Ejemplo usando localStorage
        navigate('/home'); // Redirige a /home
      } else {
        const errorData = await response.json(); // Intenta obtener el mensaje del backend
        setError(errorData.message || 'Correo o contraseña incorrectos'); // Muestra el mensaje del backend o uno genérico
        console.error('Error al iniciar sesión:', response.status, errorData);
      }
    } catch (error) {
      setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.'); // Mensaje de error genérico
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="App">
      <div className='videologin'>
          <video src={Hexagons} autoPlay loop muted/>
      </div>
      <header className="App-header">
        <h1>Bienvenido a Evadan</h1>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Iniciar sesión</button>
          </form>
          {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si existe */}
          <div className="login-links">
            <ul>
              <li><Link to="/Formulario">Crear cuenta</Link></li>
              <li>¿Olvidaste tu contraseña?</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Inicioapp;
