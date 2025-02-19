import { Link } from "react-router-dom";
import './Icon.css';

function Icon() {
  return (
    <nav>
      <div className="icon-container">
        <Link to="/">
          <img src="logo.webp" alt="EDDN" className="logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Icon;