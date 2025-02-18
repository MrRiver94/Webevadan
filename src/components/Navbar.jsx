import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/perfil">Perfil</Link>
    </nav>
  );
}

export default Navbar;