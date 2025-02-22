import { Link, useLocation } from "react-router-dom";
import './Icon.css';
import Eddv from '../assets/img/Eddv.webp';

function Icon() {
  const location = useLocation();
  const showLogo = location.pathname !== '/Formulario'; // Muestra el logo solo en la página principal

  if (!showLogo) {
    return null; // No renderiza el logo si no está en la página principal
  }

  return (
    <nav>
      <div className="icon-container">
        <Link to="/">
          <img src={Eddv} alt="EDDV" />
        </Link>
      </div>
    </nav>
  );
}

export default Icon;