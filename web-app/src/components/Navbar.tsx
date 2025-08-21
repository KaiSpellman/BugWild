import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BUGWILD</h1>
      <div>
        <Link to="/news" className="nav-link">NEWS</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/" className="nav-link">HOME</Link>
      </div>
    </nav>
  );
}

export default Navbar;
