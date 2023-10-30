import React from 'react';
import "../index.css"
import Header from '../../components/header/Header';
import pictureAccueil from "./photoPresentation.png"
import "./Accueil.css"

const Accueil = () => {
    return (
        <div>
            <Header/>
            {/* <div className='textContent'>
            <p>C'est la page ACCUEIL</p>
            </div> */}

            <div className='startPicture'>
            <img src= {pictureAccueil} alt="photo accueil" />
            </div>

        </div>
    );
};

export default Accueil;