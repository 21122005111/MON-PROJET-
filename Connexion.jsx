import React, { useState } from "react";
import "./styles/Connexion.css";

const Connexion = () => {
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [erreur, setErreur] = useState(""); // Gestion des erreurs

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simuler une vérification basique
        const emailValide = "test@exemple.com";
        const motDePasseValide = "123456";

        if (email === emailValide && motDePasse === motDePasseValide) {
            alert(`Bienvenue ${email} !`);
            setErreur(""); // Si correct, réinitialiser l'erreur
        } else {
            setErreur("Email ou mot de passe incorrect.");
        }
    };

    return (
        <div className="connexion">
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit} className="form-connexion">
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
                {erreur && <p className="erreur">{erreur}</p>} {/* Affiche l'erreur */}
                <button type="submit">Connexion</button>
                <p className="mot-de-passe-oublie">
                    <a href="/reinitialiser">Mot de passe oublié ?</a>
                </p>
            </form>
        </div>
    );
};

export default Connexion;

