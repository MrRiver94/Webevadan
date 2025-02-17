
import './App.css';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Evadan</h1>
        <div className="login-container">
          <input type="text" placeholder="Nombre de usuario" className="login-input" />
          <input type="password" placeholder="Contraseña" className="login-input" />
          <button className="login-button">Iniciar sesión</button>
          <div className="login-links">
            <a href="#">Crear cuenta</a>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
