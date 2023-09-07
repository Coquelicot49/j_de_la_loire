import React from 'react';
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';

const AssGen = () => {

    const soc = ["Lucie", "Charline", "Flavie"]


    return (
        <div>
            <Header/>

           <div className='textContent'>

            <div className='intro'>
                <h1>Les Assemblées Générales</h1>
                <p>Depuis juillet 1997, date du premier camp Jad'Or, un bon nombre de réunion ont été organisée.
                <br/>On retrouve ici la liste de toutes ces cousinade / assemblées générales.
                </p>
            </div>

            <div className='filtreAG'>
                <p> Tu peux filtrer par :
                    <div className='filterBox'>
                        <select><option> par Année </option></select>
                        <select><option> par type de lieu </option></select>
                        <select><option> par Sociétaire </option></select>
                    </div>

                    <div id="compteurAG">
                        Nombre d'assembléés générales affichées :
                    </div>

                    <div id='addAGButton'>
                    <Bouton texteBouton="Ajouter une AG"/>
                    </div>
                </p>
            </div>

            <div className='lesCardsAG'>
                <AG_card/>
                <AG_card/>
                <AG_card/>
                <AG_card/>
                <AG_card/>
                <AG_card/>
                <AG_card/>
            </div>
            </div>
        </div>
    );
};

export default AssGen;