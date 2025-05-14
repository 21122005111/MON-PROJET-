import React from "react";
import "./styles/Membres.css";
import fondImage from './image/background.jpg';
import bougaImage from './image/president.jpg';
import abdessamadImage from './image/ABDESSAMAD.jpg';
import soufianeImage from './image/SOUFIANE.jpg';
import myriemImage from './image/MYRIEM.jpg';
import nouhailaImage from './image/NOUHAILA.jpg';
import azizaImage from './image/AZIZA.jpg';
import hartalImage from './image/SANAA.jpg';
import salmaImage from './image/SALMA.jpg';
import walidImage from './image/WALID.jpg';
import aymanImage from './image/AYMAN.jpg';
import latifaImage from './image/LATIFA.png';
import imadImage from './image/IMAD.jpg';
import aymenImage from './image/AYMEN.jpg';
import mounirImage from './image/MOUNIR.jpg';
import boutainaImage from './image/BOUTAINA.jpg';
import ilyasImage from './image/ILYAS.jpg';
import yassineImage from './image/YASSINE.jpg';

const Membres = () => {
    const membres = [
        { nom: "BOUGA BOUCHRA", photo: bougaImage, role: "Présidente", niveau: "étudiante en Master TI", email: "bouga.bouchra@gmail.com" },
        { nom: "ABDESSAMAD MORAD", photo: abdessamadImage, role: "Vice-Président", niveau: "étudiant en Master TI", email: "abdessamad.morad01@gmail.com" },
        { nom: "SOUFIANE ARYBOU", photo: soufianeImage, role: "Trésorière", niveau: "étudiant en Master TI", email: "soufianearybou@gmail.com" },
        { nom: "MYRIEM BENHADDOU", photo: myriemImage, role: "Secrétaire générale", niveau: "étudiante en Master TI", email: "benhaddoumyriem1@gmail.com" },
        { nom: "NOUHAILA KHACHTAOUI", photo: nouhailaImage, role: "Secrétaire générale", niveau: "étudiante en Master TI", email: "nouhailakhachtaoui5@gmail.com" },
        { nom: "AZIZA NASYF", photo: azizaImage, role: "Responsable de communication", niveau: "étudiante en Master TI", email: "azizanasyf6@gmail.com" },
        { nom: "HARTAL SANAA", photo: hartalImage, role: "Responsable de communication", niveau: "étudiante en Master GME", email: "hartalsanaa@gmail.com" },
        { nom: "EL HAOUZI SALMA", photo: salmaImage, role: "Responsable de communication", niveau: "étudiante en Master TI", email: "salma123elhaouzi@gmail.com" },
        { nom: "WALID RACHID", photo: walidImage, role: "Responsable du matériel", niveau: "étudiant en Master TI", email: "rachidwalid427@gmail.com" },
        { nom: "EL HANSALI AYMAN", photo: aymanImage, role: "Responsable du matériel", niveau: "étudiant en Master TI", email: "aymanhansali2004@gmail.com" },
        { nom: "MOUJAHID LATIFA", photo: latifaImage, role: "Cellule des événements", niveau: "étudiante en Master TI", email: "latifamoujahud@gmail.com" },
        { nom: "METAHI IMAD", photo: imadImage, role: "Cellule des événements", niveau: "étudiant en Master TI", email: "metahi.imad@gmail.com" },
        { nom: "AYMEN ABID", photo: aymenImage, role: "Cellule des événements", niveau: "étudiant en Master TI", email: "aymenabid084@gmail.com" },
        { nom: "MOUNIR BOUGUI", photo: mounirImage, role: "Designer", niveau: "étudiant en Master TI", email: "bouguimounir875@gmail.com" },
        { nom: "BOUTAINA SOULTANA", photo: boutainaImage, role: "Responsable RSE", niveau: "étudiante en Master TI", email: "boutaina2002maroc@gmail.com" },
        { nom: "NAIT ILYAS", photo: ilyasImage, role: "Responsable RSE", niveau: "étudiant en Master TI", email: "naitkhermacheilyas@gmail.com" },
        { nom: "CHTAINI YASSINE", photo: yassineImage, role: "Designer", niveau: "étudiant en Master", email: "chtainiyassine1@gmail.com" }
    ];

    return (
        <div className="membres">
            <h2 style={{ color: "#00c6ff" }}>Nos Membres</h2>
            <div className="membre-list">
                {membres.map((membre, index) => (
                    <div className="membre-card" key={index}>
                        <div className="avatar">
                            <img src={membre.photo} alt={membre.nom} />
                        </div>
                        <h3>{membre.nom}</h3>
                        <p>{membre.role}</p>
                        <p>{membre.niveau}</p>
                        <p>{membre.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Membres;


