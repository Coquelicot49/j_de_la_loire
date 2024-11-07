import React, {useState, useEffect} from 'react';
import "../index.css"
import "../logout/Logout.css"
import Header from '../../components/header/Header';
// import Logo from '../components/logo/Logo';
import pinkLogo from "../../images/rondrose.png"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';
import { NavLink } from 'react-router-dom';

const Logout = () => {

    // valeur des messages d'erreur
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const deconnect = async() => {

        const { error } = await supabase.auth.signOut()

        if (error) {
            setError(error.message);
            setMessage('');
            // Pop up pour annoncer une erreur
            // alert('Oups ! Il y a un bug. Contact Coco en lui donnant le message suivant : Erreur : '&error&' - Message : '&message)
            alert('Oups ! Il y a un bug. Contact Coco !')

        } else {
            // Pop up pour annoncer la réussite
            alert('Au revoir !');
            setError('');

            // Rejoindre page de connexion
            window.location.href = '/accueil'
        }
    }


    return (
        <div>

            <Header/>

            <div className='textContent'>
            <p>ceci est la page pour se déconnecter</p>
            

            <Bouton id="boutonsLogout" texteBouton='Je me déconnecte' onClick={deconnect} />
            
            </div>
            
        </div>
    );
};

export default Logout;