import React from 'react';
import { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import AG_card from '../../components/ag_card/AG_card';
import "./AssGen.css"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';
import Inputbox from '../../components/inputbox/Inputbox';

const AssGen = () => {

    // FETCH TABLE AG //
    // Définition de l'état initial des données de la table "ag", donc vide au départ
    // Au besoin, setDataAG prendra des valeurs différentes pour remplir les données dataAG des AG_card
    const [dataAG, setDataAG] = useState(null);

    // useEffect pour fetcher la table "ag" en totalité via "fetchAG()"
    useEffect(() => {
        fetchAG();
    }, [])

    // fonction/requête qui appelle toutes les données de la table "ag"
    const fetchAG = async() => {
    
        try {
            let { data: ag, error } = await supabase
            .from('ag')
            .select('*')
            .order('year')

            if (ag) {
                // console.log(ag)
                setDataAG(ag)
                setTotalAG(ag.length)
                setDisplayAG(ag.length)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    // Version fetch de la BDD avec filtre dans la requête
    // Pas une bonne idée car ne permet pas de gérer les majuscules
    // const fetchAGFiltre = async() => {
    
    //     try {
    //         let { data: ag, error } = await supabase
    //         .from('ag')
    //         .select('*')
    //         .eq('host', searchTerm)
    //         .order('year')

    //         if (ag) {
    //             // console.log(ag)
    //             setDataAG(ag)
    //             setTotalAG(ag.length)
    //             setDisplayAG(ag.length)
    //         }
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }


    // COMPTABILITSATION NOMBRE AG
    // Définiton de l'état initial du nombre total d'AG, donc avant appel de la table "ag" à 0
    const [totalAG, setTotalAG] = useState(0)

    // Définition de l'état initial du nombre d'AG affiché
    const [displayAG, setDisplayAG] = useState(0)


    // MISE À JOUR DES RESULTATS SELON L'INPUT DE RECHERCHE
    // Définition de la variable relative au contenu de l'input de recherche
    const [searchTerm, setSearchTerm] = useState("")


    // Fonction qui s'active au changement du contenu de l'input
    // pour que searchTerm prenne la valeur de l'input
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
    
    // Fonction qui se déclenche au click du bouton "Filtrer"
    // et qui va filtrer le résultat de fetchAG avec le contenu de l'input
    const filtre = () => {
        setDataAG(dataAG.filter(item => 
            (item.host.toLowerCase() === searchTerm.toLowerCase())
            ))
        setDisplayAG()
        // fetchAGFiltre()
    }
    

    // EFFACER LES FILTRES
    const effacerFiltre = () => {
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
                    <p> Tu peux filtrer par : </p>
                        <div className='filterBox'>
                            <div>
                            <Inputbox
                            type="text"
                            name="searchBar"
                            value={searchTerm}
                            onChange={handleSearchTerm}
                            />
                            </div>
                             <div> 
                                <Bouton texteBouton='Filtrer' onClick={filtre}/> 
                                <Bouton texteBouton='Effacer les filtres' onClick={effacerFiltre}/>
                            </div>
                        </div>
                       

                        <div id="compteurAG">
                            Nombre d'assemblées générales totales depuis 1997 : {totalAG}
                            <br/> Nombre d'assembléés générales affichées : {displayAG}
                        </div>

                        <div id='addAGButton'>
                        <Bouton texteBouton="Ajouter une AG"/>
                        </div>
                    {/* </p> */}
                </div>

                <div className='lesCardsAG' >
                    {/* si dataAG (= résultat de la requête) comporte des données, alors... */}
                    {dataAG ? 
                    (
                        //...alors pour chaque ligne de données dispo, rempli une card_AG et affiche là
                        dataAG.map((item) => (
                            <AG_card key={item.id_ag} year={item.year} season={item.season} place={item.place} host={item.host} id_ag={item.id_ag}/>
                        ))
                    )
                        //...sinon ou en attendant affiche le message d'attente
                    : (<p>En cours de chargement...</p>)}
                </div>

            </div>
        </div>
    );
};

export default AssGen;