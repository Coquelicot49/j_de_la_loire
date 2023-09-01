import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hall from "./pages/Hall";
import Login from "./pages/Login"
import Accueil from './pages/Accueil'
import Contact from "./pages/Contact"
import CarnetAdresse from "./pages/CarnetAdresse"
import Events from "./pages/Events"
import Calendrier from "./pages/Calendrier"
import Retrouvailles from "./pages/Retrouvailles"
import Jeux from "./pages/Jeux"
import Quiz from "./pages/Quiz"
import Quiestce from "./pages/Quiestce"
import Memories from "./pages/Memories"
import Journal from "./pages/Journal"
import Arbre from "./pages/Arbre"
import Souvenirs from "./pages/Souvenirs"
import Jador from "./pages/Jador"
import Statuts from "./pages/Statuts"
import ConseilAdmin from "./pages/ConseilAdmin"
import AssGen from "./pages/AssGen"
import Don from "./pages/Don"
import MonCompte from "./pages/MonCompte"
import Inscription from "./pages/Inscription"
import Parameters from './pages/Parameters';
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hall/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/inscription" element={<Inscription/>}/>
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/contact" element={<Contact/>} />
          <Route path="/contact/carnetadresse" element={<CarnetAdresse/>} />
        <Route path="/events" element={<Events/>} />
          <Route path="/events/calendrier" element={<Calendrier/>} />
          <Route path="/events/retrouvailles" element={<Retrouvailles/>} />
        <Route path="/jeux" element={<Jeux/>} />
          <Route path="/jeux/quiz" element={<Quiz/>} />
          <Route path="/jeux/quiestce" element={<Quiestce/>} />
        <Route path="/memories" element={<Memories/>} />
          <Route path="/memories/journalguerre" element={<Journal/>} />
          <Route path="/memories/arbregen" element={<Arbre/>} />
          <Route path="/memories/souvenirs" element={<Souvenirs/>} />
        <Route path="/jador" element={<Jador/>} />
          <Route path="/jador/statuts" element={<Statuts/>} />
          <Route path="/jador/conseiladmin" element={<ConseilAdmin/>} />
          <Route path="/jador/assembleegenerale" element={<AssGen/>} />
          <Route path="/jador/don" element={<Don/>} />
        <Route path="/moncompte" element={<MonCompte/>} />
          <Route path="/moncompte/parameters" element={<Parameters/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;