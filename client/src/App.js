import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hall from "./pages/hall/Hall";
import Login from "./pages/login/Login"
import Accueil from './pages/accueil/Accueil'
import Contact from "./pages/contact/Contact"
import CarnetAdresse from "./pages/carnetAdresse/CarnetAdresse"
import Events from "./pages/events/Events"
import Calendrier from "./pages/calendrier/Calendrier"
import Retrouvailles from "./pages/retrouvailles/Retrouvailles"
import Jeux from "./pages/jeux/Jeux"
import Quiz from "./pages/quiz/Quiz"
import Quiestce from "./pages/quiestce/Quiestce"
import Memories from "./pages/memories/Memories"
import Journal from "./pages/journal/Journal"
import Arbre from "./pages/arbre/Arbre"
import Souvenirs from "./pages/souvenirs/Souvenirs"
import Jador from "./pages/jador/Jador"
import Statuts from "./pages/statuts/Statuts"
import ConseilAdmin from "./pages/ca/ConseilAdmin"
import AssGen from "./pages/ag/AssGen"
import Don from "./pages/don/Don"
import MonCompte from "./pages/monCompte/MonCompte"
import Inscription from "./pages/inscription/Inscription"
import Parameters from './pages/parameters/Parameters';
import Logout from './pages/logout/Logout';
//import New_ag from './components/new_ag/New_ag';
import NewAG_step1 from './pages/ag/NewAG_step1';
import NewAG_step2 from './pages/ag/NewAG_step2';
import MyComponent from './components/component_back/MyComponent';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ResetPassword from './pages/login/ResetPassword';
import useAutoLogout from './hooks/useAutoLogout';

 
const App = () => {

  // Hook pour que le user soit automatiquement déconnecter après x temps d'inactivité
  // cf composant AUTO_LOGOUT_TIME.js
  useAutoLogout();

  /////quand l'authenfication fonctionnera
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const response = await axios.get(`http://localhost:5005/presents_soc_ag/${id_ag}`);
//             if (response.status == 401) {
//                 setIsConnected(false);
//             } 
//   })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hall/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/inscription" element={<Inscription/>}/>
        <Route path="/reset" element={<ResetPassword/>}/>

      <Route element={<ProtectedRoute />}>
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
            <Route path="/jador/assembleegenerale/newagstep1" element={<NewAG_step1/>} />
            <Route path="/jador/assembleegenerale/newagstep2" element={<NewAG_step2/>} />
            <Route path="/jador/don" element={<Don/>} />
          <Route path="/moncompte" element={<MonCompte/>} />
            <Route path="/moncompte/parameters" element={<Parameters/>} />
            <Route path="/moncompte/logout" element={<Logout/>} />

            <Route path="/testback" element={<MyComponent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;