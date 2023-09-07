import React from 'react';
import "../index.css"
import Header from '../../components/header/Header';

const Accueil = () => {
    return (
        <div>
            <Header/>
            <div className='textContent'>
            <p>C'est la page ACCUEIL</p>
            </div>
        </div>
    );
};

export default Accueil;