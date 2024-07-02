import { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{background:'#fff'}} >
      <div className="container-fluid">
        <a className="navbar-brand logo mx-4" href="#">
          <img src="./src/assets/img/logo_1.png" alt="Habot_Logo" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Find Suppliers</a>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link" onClick={toggleMenu}>
                Find Service Tags <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <ul className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#">Service one</a></li>
                <li><a className="dropdown-item" href="#">Service two</a></li>
                <li><a className="dropdown-item" href="#">Service three</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success">Login / SignUp</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
