import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="https://i.ibb.co/kZyGFfj/del8088-52594deb-abfd-4fad-b712-48588cfd77f1.png"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/manage-idole" className="nav-link">
          Manage Idole
        </Link>
        <Link to="/login" className="nav-link">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
