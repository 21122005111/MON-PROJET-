import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from './image/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo du club" />
            </div>
            <div className="nav-links">
                <a><Link to="/">Accueil</Link></a>
                <a><Link to="/membres">Membres</Link></a>
                <a><Link to="/evenements">Événements</Link></a>
                <a><Link to="/connexion">Se connecter</Link></a>
               
            </div>
        </nav>
    );
};

export default Navbar;

