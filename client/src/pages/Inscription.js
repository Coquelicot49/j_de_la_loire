import React from 'react';
import "./index.css"
import "./Inscription.css"
import pinkLogo from "../images/rondrose.png"


const Inscription = () => {
    return (
        <div>
            <div>
            <h1 id='authText'><img src={pinkLogo}></img>Tu es Jadeau ? Inscris-toi !</h1>
            </div>

            <div id='formSignup'>
            <p id="authAsk1"> Prénom : <input id="login"></input> </p>
            <p id="authAsk2"> Nom : <input type="password" id="mdp"></input></p>
            </div>

           
        </div>
    );
};

export default Inscription;