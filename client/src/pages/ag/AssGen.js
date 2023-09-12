import React from 'react';
import { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';

const AssGen = () => {

    // Définition de l'état initiale des données de la table "ag", donc vide au départ
    // Au besoin, setDataAG prendra des valeurs différentes pour remplir les données dataAG des AG_card
    const [dataAG, setDataAG] = useState(null);

    // Définiton de l'état initiale du nombre total d'AG, donc avant appel de la table "ag" à 0
    const [totalAG, setTotalAG] = useState(0)

    // useEffect pour fetcher la table "ag" en totalité via "fetchAG()"
    useEffect(() => {
        fetchAG();
      }, []);

    // fonction qui appelle toutes les données de la table "ag"
    const fetchAG = async() => {
        try {
            let { data: ag, error } = await supabase
            .from('ag')
            .select('*')

            if (ag) {
                console.log(ag)
                setDataAG(ag)
                setTotalAG(ag.length)
            }
        }
        catch (error) {
            console.log(error)
        }
    }



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
                            Nombre d'assemblées générales totales depuis 1997 : {totalAG}
                            <br/> Nombre d'assembléés générales affichées :
                        </div>

                        <div id='addAGButton'>
                        <Bouton texteBouton="Ajouter une AG"/>
                        </div>
                    </p>
                </div>

                <div className='lesCardsAG'>
                    {/* si dataAG (= résultat de la requête) comporte des données, alors... */}
                    {dataAG ? (
                        //...alors pour chaque ligne de données dispo, rempli une card_AG et affiche là
                        dataAG.map((item) => (
                            <AG_card year={item.year} season={item.season} place={item.place} host={item.host}/>
                        ))
                        //...sinon ou en attendant affiche le message d'attente
                    ) : (<p>En cours de chargement...</p>)}
                </div>

            </div>
        </div>
    );
};

export default AssGen;