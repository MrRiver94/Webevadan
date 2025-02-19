import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
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