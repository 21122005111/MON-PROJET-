
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Membres from "./components/Membres";
import Evenements from "./components/Evenements";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} /> 
        <Route path="/membres" element={<Membres />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
}

export default App;
