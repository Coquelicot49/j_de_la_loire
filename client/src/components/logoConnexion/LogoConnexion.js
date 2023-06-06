import React from 'react';
import logoAccueil from "./logoAccueilComplet.png"
import "./LogoConnexion.css"
import { NavLink } from 'react-router-dom';

const LogoConnexion = () => {
    return (
        <div className='logoAccueil'>
           <NavLink to="/connexion">
            <img className='logoConnexion' src={logoAccueil} alt="bouton accès"/>
            </NavLink>
        </div>
    );
};

export default LogoConnexion;