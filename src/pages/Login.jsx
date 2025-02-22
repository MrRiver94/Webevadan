import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Link } from "react-router-dom";
import Hexagons from '../assets/video/Hexagons.mp4';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post('https://flask-render-8y9z.onrender.com:1000/login', { 
        username, 
        password 
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/home'); // 🔥 Redirige a la nueva pantalla con el mensaje
      } else {
        setError('Correo o contraseña incorrectos');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'No se pudo conectar con el servidor');
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
          {error && <p className="error-message">{error}</p>}
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

export default Login;
