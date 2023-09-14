import React from 'react';
import { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';

const AssGen = () => {

    // FETCH TABLE AG //
    // Définition de l'état initial des données de la table "ag", donc vide au départ
    // Au besoin, setDataAG prendra des valeurs différentes pour remplir les données dataAG des AG_card
    const [dataAG, setDataAG] = useState(null);

    // useEffect pour fetcher la table "ag" en totalité via "fetchAG()"
    useEffect(() => {
        fetchAG();
      }, []);

    // fonction/requête qui appelle toutes les données de la table "ag"
    const fetchAG = async() => {
        try {
            let { data: ag, error } = await supabase
            .from('ag')
            .select('*')
            .order('year')

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

    // COMPTABILITSATION NOMBRE AG TOTAL
    // Définiton de l'état initial du nombre total d'AG, donc avant appel de la table "ag" à 0
    const [totalAG, setTotalAG] = useState(0)



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
                            <select><option> par sociétaire </option></select>
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
                            <AG_card year={item.year} season={item.season} place={item.place} host={item.host} id_ag={item.id_ag}/>
                        ))
                        //...sinon ou en attendant affiche le message d'attente
                    ) : (<p>En cours de chargement...</p>)}
                </div>

            </div>
        </div>
    );
};

export default AssGen;