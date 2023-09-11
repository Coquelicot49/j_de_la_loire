import React from 'react';
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';

const AssGen = () => {

    const soc = ["Lucie", "Charline", "Flavie"]

    const fetchAG = async() => {
        try {
            let { data: AG, error } = await supabase
            .from('AG')
            .select('*')

            if (AG) {
                console.log(AG)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchAG()



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
                        Nombre d'assemblées générales totales :  {/* length table AG */}
                        <br/> Nombre d'assembléés générales affichées :
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