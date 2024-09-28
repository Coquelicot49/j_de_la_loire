import React from 'react';
import { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';
import New_ag from '../../components/new_ag/New_ag.js';

const AssGen = () => {

    // DEFINITION UseState
    // Définition de l'état initial des données de la table "ag", donc vide au départ avant fetchAG
    // Au besoin, setDataAG prendra des valeurs différentes pour remplir les données dataAG des AG_card
    const [dataAG, setDataAG] = useState(null);

    // Définition de l'état inital des données de la table "societaires", donc vide avant fetchSOCFiltre
    const [dataSocFiltre, setDataSocFiltre] = useState(null)

    // Définition de l'état initial des valeurs unique de la colonne "host" de la table "ag"
    const [dataHostFilter, setDataHostFilter] = useState(null)

    // Définition de l'état initial des valeurs unique de la colonne "year" de la table "ag"
    const [dataYearFilter, setDataYearFilter] = useState(null)

    // Définition de la valeur initial des filtres
    const [yearFilter, setYearFilter] = useState('')
    const [hostFilter, setHostFilter] = useState('')
    const [socFilter, setSocFilter] = useState('')
    const [arrIdagSoc, setArrIdagSoc] = useState('')
    let arrID = []

    // COMPTABILITSATION NOMBRE AG TOTAL
    // Définiton de l'état initial du nombre total d'AG, donc avant appel de la table "ag" à 0
    const [totalAG, setTotalAG] = useState(0)
    const [totalAGDisplay, setTotalAGDisplay] = useState(0)


    // FETCH DES TABLES AG & SOCIETAIRES //
    // useEffect pour fetcher la table "ag" en totalité via "fetchAG()"
    useEffect(() => {
        fetchAG();
        fetchSOCFiltre();
        fetchHostList();
        fetchYearList();
      }, []);

    // fonction/requête qui appelle toutes les données de la table "ag"
    // Et qui ajoute un/des filtre(s) si filtre(s) activé(s)
    const fetchAG = async() => {
        try {
            let {data: ag, error } = await supabase
            .from('ag')
            .select('*')
            .order('year')
           
            if (ag){
                console.log(ag)
                setDataAG(ag)
                setTotalAG(ag.length)
                setTotalAGDisplay(ag.length)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    // fonction/requête qui appelle toutes les données de la table "societaires"
    // pour les inclure dans les choix du filtre "par sociétaire"
    const fetchSOCFiltre = async() => {
        try {
            let {data : socFiltre, error} = await supabase 
            .from('societaires')
            .select('prenom')
            .order('prenom')

            if (socFiltre) {
            setDataSocFiltre(socFiltre)
            }   
        }
        catch (error) {
            console.log(error)
        }
    }

    // Liste des valeurs uniques pour le filtre HOST
    const fetchHostList = async() => {
        try {
            let {data : hostList, error} = await supabase
            .from('host_list')
            .select('*')
            .order('host')

            setDataHostFilter(hostList)
        }
        catch (error) {
            console.log(error)
        }
    }

        // Liste des valeurs uniques pour le filtre YEAR
        const fetchYearList = async() => {
            try {
                let {data : yearList, error} = await supabase
                .from('year_list')
                .select('*')
                .order('year')
    
                setDataYearFilter(yearList)
            }
            catch (error) {
                console.log(error)
            }
        }


    ////////////// ACTIVER LES FILTRES //////////////
    // Prépa liste des id_ag en fonction de la valeur du filtre sociétaire
    // liste qui sera appeler dans la fonction handleFilter
    const filterSocChange = (e) => {
        
        setSocFilter(e.target.value)

            const fetchAGSOC = async() => {
                let { data: dataListeIDAG } = await supabase
                .from('presents_soc_ag')
                .select('id_ag')
                .eq('prenom', e.target.value)
        
                    for (let i = 0 ; i < dataListeIDAG.length; i++) {
                        let refID = dataListeIDAG[i]
                        arrID.push(refID.id_ag)
                    }
                setArrIdagSoc(arrID)
            }
        fetchAGSOC()
    }

    // Activation des filtres
    const handleFilter = async() =>  {
        try {
            let query = supabase
            .from('ag')
            .select('*')
            .order('year')

            if (yearFilter) {query = query.eq('year', yearFilter) }
            if (hostFilter) { query = query.eq('host', hostFilter) }
            if (socFilter) { query = query.filter('id_ag','in',`(${arrIdagSoc})`)}
            // if (socFilter) { await fetchAGSOC() ; query = query.filter('id_ag','in',`(${arrIdagSoc})`)}
            
           
            const {data: ag, error} = await query
            setDataAG(ag)
            setTotalAGDisplay(ag.length)
        }
        catch (error) {
            console.log(error)
        }
    }


    // EFFACER LES FILTRES
    // au click du bouton "Effacer les filtres"
    const resetFilter = () => { 
        setYearFilter('')
        setHostFilter('')
        setSocFilter('')

        const fetchAG = async() => {
        let { data: ag } = await supabase
        .from('ag')
        .select('*')
        .order('year')
        setDataAG(ag)
        setTotalAGDisplay(ag.length)
        }

        fetchAG()
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
                    <div><p> Tu peux filtrer par :</p></div>
                    <div className='filterBox'>

                        {/* filtre par année */}
                        <select 
                            className="filterAGByYear"
                            onChange={(e) => setYearFilter(e.target.value)}
                            value={yearFilter}>

                            <option value=''> par Année </option>

                            {dataYearFilter ?
                            (dataYearFilter.map((item, index) => (
                            <option key={index} value={item.year}>
                                {item.year}
                            </option>
                            )))
                            : (<option>pas d'année</option>)}

                        </select>

                        {/* filtre par host */}
                        <select 
                            className="filterAGByHost"
                            onChange={(e) => setHostFilter(e.target.value)}
                            value={hostFilter}>

                            <option value=''> par lieu </option>

                            {dataHostFilter ?
                            (dataHostFilter.map((item, index) => (
                            <option key={index} value={item.host}>
                                {item.host}
                            </option>
                            )))
                            : (<option>pas de lieu</option>)}
                            
                        </select>


                        {/* filtre par sociétaire */}
                        <select
                                className='filterAGBySoc'
                                onChange={filterSocChange}
                                value={socFilter}
                                >

                            <option value=''>par sociétaire</option>

                            {dataSocFiltre ? 
                            (dataSocFiltre.map((item, index) => (
                            <option key={index} value={item.prenom}>
                                {item.prenom}
                            </option>
                            )))
                            : <option>pas de résultat</option>}
                        </select> 
                    </div>

                    <div id="boutonsFiltres">
                        <Bouton texteBouton="Filtrer" onClick={handleFilter}/>
                        <Bouton texteBouton="Effacer les filtres" onClick={resetFilter}/>
                    </div>

                    <div id="compteurAG">
                        Nombre d'assemblées générales totales depuis 1997 : {totalAG}
                        <br/> Nombre d'assembléés générales affichées : {totalAGDisplay}
                    </div>

                    <div id='addAGButton'>
                    <Bouton texteBouton="Ajouter une AG"/>
                    </div>
                </div>

                <div className='lesCardsAG'>
                    {/* si dataAG (= résultat de la requête) comporte des données, alors... */}
                    {dataAG ? (
                        //...alors pour chaque ligne de données dispo, rempli une card_AG et affiche là
                        dataAG.map((item, index) => (
                            <AG_card key={index} year={item.year} season={item.season} place={item.place} host={item.host} id_ag={item.id_ag}/>
                        ))
                        //...sinon ou en attendant affiche le message d'attente
                    ) : (<p>En cours de chargement...</p>)}
                </div>
                
                {/* Test visuel du composant New_ag */}
                <div>
                    <New_ag/>
                </div>

            </div>
        </div>
    );
};

export default AssGen;