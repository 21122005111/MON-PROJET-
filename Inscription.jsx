import React, { useState } from "react";
import "./styles/Inscription.css";
import robotImage from './image/robot-transparent.jpg';  

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
    const [erreur, setErreur] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (motDePasse !== confirmationMotDePasse) {
            setErreur("Les mots de passe ne correspondent pas.");
            return;
        }

        alert(`Inscription réussie pour : ${email}`);
    };

    return (
        <div className="inscription">
            <h2>S'inscrire</h2>
            <form onSubmit={handleSubmit} className="form-inscription">
                <input
                    type="email"
                    placeholder="Adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={confirmationMotDePasse}
                    onChange={(e) => setConfirmationMotDePasse(e.target.value)}
                    required
                />
                {erreur && <p className="erreur">{erreur}</p>}
                <button type="submit">S'inscrire</button>
            </form>

         
            <img src={robotImage} alt="Robot" className="robot-image robot-left" />
            <img src={robotImage} alt="Robot" className="robot-image robot-right" />
        </div>
    );
};

export default Inscription;
