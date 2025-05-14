import React from "react";
import "./styles/Evenements.css";


import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';
import img5 from './image/img5.jpg';

const Evenements = () => {
    const evenements = [
        {
            titre: "ÉVÉNEMENT 1",
            description: "Le 2 décembre 2023, le club CRIOT a formé les participants à l'Arduino UNO, combinant découverte et programmation.",
            photo: img1
        },
        {
            titre: "ÉVÉNEMENT 2",
            description: "Le 9 décembre, le club a organisé une seconde formation Arduino, avec des exercices pratiques et un projet LED.",
            photo: img2
        },
        {
            titre: "ÉVÉNEMENT 3",
            description: "Le 9 mars, lancement de CRIOT-LAB : formation en gestion de projets et atelier créatif pour stimuler l’innovation.",
            photo: img3
        },
        {
            titre: "ÉVÉNEMENT 4",
            description: "Le 20 mars, journée dédiée à l’intelligence artificielle avec ateliers pratiques et présence du Doyen.",
            photo: img4
        },
        {
            titre: "ÉVÉNEMENT 5",
            description: "Le 25 mai, atelier robotique et IA au collège Ettahadi pour initier les jeunes aux sciences et technologies.",
            photo: img5
        }
    ];

    return (
        <div className="evenements">
            <h2>Nos Événements</h2>
            <div className="evenement-list">
                {evenements.map((event, index) => (
                    <div className="evenement-card" key={index}>
                        <div className="evenement-photo">
                            <img src={event.photo} alt={event.titre} />
                        </div>
                        <h3>{event.titre}</h3>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evenements;

