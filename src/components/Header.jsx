import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importe un fichier CSS pour styliser ton header
import logo from '/logo-image0.jpg'; // Importe ton logo (assure-toi que le chemin est correct)

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo de Mon Entreprise" />
            <input type="" src="" alt="" />
          </Link>
        </div>
        <nav className="main-navigation">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos">À Propos</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Tu peux ajouter d'autres liens de navigation ici */}
          </ul>
        </nav>
        {/* Tu peux ajouter d'autres éléments ici, comme des boutons de connexion, un champ de recherche, etc. */}
      </div>
    </header>
  );
}

export default Header;