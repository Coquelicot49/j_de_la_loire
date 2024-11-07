import React, {useState, useEffect} from 'react';
import "../index.css"
import "./Login.css"
// import Logo from '../components/logo/Logo';
import pinkLogo from "../../images/rondrose.png"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';
import { NavLink } from 'react-router-dom';

const Login = () => {

    // Valeur des champs
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // valeur des messages d'erreur
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // async function login() {
    //     const response = await axios.get(`http://localhost:5005/login`);
    //     localStorage.setItem('session', response.data.session);
    // }

    const login = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            setError(error.message);
            setMessage('');
            // Pop up pour annoncer une erreur
            alert('Erreur d authentification. Si l erreur persiste, contacte Coco.')
            //alert('Oups ! Il y a un bug. Contact Coco en lui donnant le message suivant : Erreur : '&error&' - Message : '&message)

        } else {
            // Pop up pour annoncer la réussite
            alert('Bienvenue dans le monde merveilleux de la famille Jadeau !');
            setError('');

            // Rejoindre page de connexion
            window.location.href = '/accueil'
        }

    }

    ////// Pop up pour demander la réinitialisation du mot de passe oublié
    const popUpReset = () => {
        alert('Demande à Coco. Elle va t envoyer un mail pour le réinitialiser.')
    }

  
    
    return (
    <div>

        <div>
        <h1 id='authText'><img src={pinkLogo}></img>Qui n'est pas Jadeau ne passera pas !</h1>
        </div>

        <div className='textContent'>

            <div className="container">
            {/* <p id="authAsk1"> Adresse mail: 
            <input id="login"></input> </p> */}
            <p id="authAsk1"> Adresse mail: 
            <input id="login"
            type ="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /> 
            </p>

            <p id="authAsk2"> Mot de passe : 
            <input 
            id="mdp"
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </p>

            <button 
            id="authOK" onClick={login}>OK</button>
            {/* <Bouton className='authOK2' texteBouton='OK' /> */}
            </div>

        </div>

                <div id="forgetMDP">
                <p onClick={popUpReset}>Mot de passe oublié</p>
                <p>
                <NavLink to="/login/inscription"> Première connexion ? Inscris-toi </NavLink></p>
                </div>
        
                
    </div>
    );
};

export default Login;