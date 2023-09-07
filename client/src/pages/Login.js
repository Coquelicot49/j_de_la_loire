import React from 'react';
import "./index.css"
import "./Login.css"
// import Logo from '../components/logo/Logo';
import pinkLogo from "../images/rondrose.png"
import Bouton from '../components/bouton/Bouton';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
    <div>
        <div>
        <h1 id='authText'><img src={pinkLogo}></img>Qui n'est pas Jadeau ne passera pas !</h1>
        </div>
        <div className='textContent'>

            <div className="container">
            <p id="authAsk1"> Adresse mail: <input id="login"></input> </p>
            <p id="authAsk2"> Mot de passe : <input type="password" id="mdp"></input></p>
            <button id="authOK">OK</button>

                <div id="forgetMDP">
                <p>Mot de passe oublié</p>
                <p>
                <NavLink to="/login/inscription"> Première connexion ? Inscris-toi </NavLink></p>
                <NavLink to="/accueil"><Bouton texteBouton='accès accueil'/></NavLink>
                </div>
                

            </div>
            </div>
    </div>
    );
};

export default Login;