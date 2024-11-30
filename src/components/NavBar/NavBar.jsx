import React, { useState } from 'react';
import './NavBar.css';
// import icon from '../../assets/Polygon 1.png';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
          <ul className='ul-nav'>
            <Link to="/accueil" className='active-item'>Accueil</Link>
            <li>A propos</li>
            <Link to="/service" className="dropdown">
              Services <img src={"icon"} alt="" />
              <ul className="dropdown-content">
                <li>Éducation</li>
                <li>Santé</li>
                <li>Agriculture</li>
              </ul>
            </Link>
            <li>Contact</li>
          </ul>
          <div className="nav-buttons">
            <button>Nous Rejoindre <i className="fa-solid fa-arrow-right"></i></button>
            <select name="lang" id="lang">
              <option value="fr">Fr</option>
              <option value="ang">Ang</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;