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

    // Définition de la valeur initial des filtres
    const [yearFilter, setYearFilter] = useState('')
    const [hostFilter,setHostFilter] = useState('')


    // useEffect pour fetcher la table "ag" en totalité via "fetchAG()"
    useEffect(() => {
        fetchAG();
      }, []);

    // fonction/requête qui appelle toutes les données de la table "ag"
    // Et qui ajoute un/des filtre(s) si filtre(s) activé(s)
    const fetchAG = async() => {
        try {
            let query = supabase
            .from('ag')
            .select('*')
            .order('year')

            if (yearFilter) { query = query.eq('year', yearFilter) }
            if (hostFilter) { query = query.eq('host', hostFilter) }
           
            const {data: ag, error} = await query
                setDataAG(ag)
                setTotalAG(ag.length)

        }
        catch (error) {
            console.log(error)
        }
    }


    // ACTIVER LES FILTRES
    const handleFilter = () => {
        console.log(yearFilter)
        fetchAG()
    }

    // EFFACER LES FILTRES
    // au click du bouton "Effacer les filtres"
    const resetFilter = () => { 
        fetchAG() 
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
                    <div><p> Tu peux filtrer par :</p></div>
                    <div className='filterBox'>
                        <select className="filterAGByYear"
                            onChange={(e) => setYearFilter(e.target.value)}
                            value={yearFilter}>
                            <option> par Année </option>
                            <option> 2008 </option>
                        </select>

                        <select className="filterAGByYear"
                            onChange={(e) => setHostFilter(e.target.value)}
                            value={hostFilter}>
                            <option> par host </option>
                            <option> Ski </option></select>

                        <select><option> par sociétaire </option></select>
                    </div>

                    <div id="boutonsFiltres">
                        <Bouton texteBouton="Filtrer" onClick={handleFilter}/>
                        <Bouton texteBouton="Effacer les filtres" onClick={resetFilter}/>
                    </div>

                    <div id="compteurAG">
                        Nombre d'assemblées générales totales depuis 1997 : {totalAG}
                        <br/> Nombre d'assembléés générales affichées :
                    </div>

                    <div id='addAGButton'>
                    <Bouton texteBouton="Ajouter une AG"/>
                    </div>
                </div>

                <div className='lesCardsAG'>
                    {/* si dataAG (= résultat de la requête) comporte des données, alors... */}
                    {dataAG ? (
                        //...alors pour chaque ligne de données dispo, rempli une card_AG et affiche là
                        dataAG.map((item) => (
                            <AG_card key={item.id_ag} year={item.year} season={item.season} place={item.place} host={item.host} id_ag={item.id_ag}/>
                        ))
                        //...sinon ou en attendant affiche le message d'attente
                    ) : (<p>En cours de chargement...</p>)}
                </div>

            </div>
        </div>
    );
};

export default AssGen;