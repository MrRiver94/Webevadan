import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {

  const location = useLocation();
  const showLogo = location.pathname !== '/Formulario'; // Muestra el logo solo en la página principal

  if (!showLogo) {
    return null; // No renderiza el logo si no está en la página principal
  }
  return (
    <nav>
      <div className="navbar-container">
        
        <ul>
          
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/plussquare">PlusSquare</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;