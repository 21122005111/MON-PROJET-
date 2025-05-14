
import React from "react";
import { Link } from "react-router-dom";      
import "./styles/Accueil.css";

const Accueil = () => {
    return (
        <div className="accueil">
            <div className="accueil-content">
                <h1>Bienvenue Au Club CRIOT</h1>
                <h2>Club Robotique et IoT</h2>
                <h6>
                    Notre objectif est d'explorer l'univers fascinant de la
                    robotique et de rendre cette technologie plus accessible.
                </h6>

             
                <Link to="/inscription">
                    <button>S'inscrire</button>
                </Link>

            </div>
        </div>
    );
};

export default Accueil;

