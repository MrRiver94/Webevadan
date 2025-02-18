import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="logo">EVADAN</Link>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;