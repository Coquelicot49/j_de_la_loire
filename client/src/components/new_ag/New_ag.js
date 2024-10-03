import React, { useCallback } from 'react'
import { useState, useEffect } from "react";
import "./New_ag.css"
import Bouton from '../bouton/Bouton.js';
import {supabase} from '../../supabase.ts';
import AG_card_simple from '../ag_card/AG_card_simple.js';


const New_ag = () => {


    

    // useState Pour STEP 1
    // Valeur des l'input pour ajout dans la table AG
    const [hostInput, setHostInput] = useState("")
    const [villeInput, setVilleInput] = useState("")
    const [yearInput, setYearInput] = useState("")
    const [saisonInput, setSaisonInput] = useState("")
    const [comment, setComment] = useState(null)

    // useState Pour STEP 2
    // Valeur des sociétaires à mettre dans le menu deroulant STEP 2
    // variable qui prend ses valeurs à l'appel de la BDD via la fonction (use effect) 'fetchSOCliste'
    const [dataSocListe, setDataSocListe] = useState("")
    
    // Valeur du sociétaire choisi dans le menu déroulant pour ajouter à la table PRESENTS via la fonction 'addSocInPresents'
    const [choiceSocToAdd, setChoiceSocToAdd] = useState("")
    const [idSocToAdd, setIdSocToAdd] = useState("")
    const [idAGToAdd, setIdAGToAdd] = useState("")
    //const [dataReceived, setDataReceived] = useState(false);
    const [dataLastAG, setDataLastAG] = useState(null)
    let idDuSoc

    // FETCH DE LA TABLE SOCIETAIRES //
    // useEffect pour fetcher la table "societaires" en totalité via "fetchSOCliste()"
    useEffect(() => {
        console.log("idSocToAdd ", idSocToAdd)
        fetchSOCliste();
      }, []);

      useEffect(() => {
        if (choiceSocToAdd && choiceSocToAdd.length > 0)
        {fetchSocID();}       
      }, [choiceSocToAdd]);

      useEffect(() => {
        if (idAGToAdd && idAGToAdd.length > 0)
        {fetchAddSocInPresents();}       
      }, [idAGToAdd]);

      useEffect(() => {
        {fetchLatestAG2();}       
      }, []);
      
////////////////////////////     STEP 1   :  AJOUTER UNE NOUVELLE AG

    // Fonction qui Insert les infos dans AG > STEP 1
    const ajoutStepUne = async() => {
   
        try {
            let {data, error } = await supabase
            .from('ag')
            .insert([
                { host: hostInput ,
                place: villeInput ,
                year: yearInput,
                season: saisonInput ,
                comment: comment,
                time_place: new Date().toISOString()
            },
                ])
                .select()

                // en attendant que l'ajout d'une ag soit dans une page annexe
                // cela permet d'avoir le résultat de l'ajout de l'ag directement en cliquant sur le bouton
                window.location.href = '/jador/assembleegenerale'
        }
        catch (error) {
            console.log(error)
        }
    }

////////////////////////////   STEP 2   : AJOUT DU SOCIETAIRE DANS L'AG 

    // STEP 2 : avoir les prénoms des sociétaires dans la liste de choix
    // Fonction qui va récupérer la liste des prénoms des sociétaire de la table SOCIETAIRES
    // pour les inclure dans les choix du filtre "par sociétaire"
    const fetchSOCliste = async() => {
        try {
            let {data : socListe, error} = await supabase
            .from('societaires')
            .select('prenom')
            .order('prenom')

            if (socListe) {
                setDataSocListe(socListe)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    // STEP 2 : pour obtenir l'ID du sociétaire qui a été sélectionné en fonction de son prénom
    const fetchSocID = async() => {

        console.log('choiceSocToAdd=', choiceSocToAdd)

        let { data: idDuSoc } = await supabase
            .from('societaires')
            .select('id_soc')
            .eq('prenom', choiceSocToAdd).single();

        console.log("idDuSoc= ", idDuSoc.id_soc, typeof(idDuSoc.id_soc))
        setIdSocToAdd(idDuSoc.id_soc)
    }
    
    // STEP 2 : à la sélection du prénom, obtention de l'id_soc associé au prénom
    // Obtenir l'id_soc du sociétaire pour ensuite l'ajouter à l'ag
    const takeSocID = (e) => {
        setChoiceSocToAdd(e.target.value)
      
    };

 

    // STEP 2 : Au click du bouton :
    // Fonction 'addSocInPresents' qui appelle les fonctions 
    // qui Insert les infos dans la table PRESENTS pour associé les sociétaires à l'ag

    // 1) fetchLatestAG = avoir l'ID de l'AG la plus récemment créée
        //// récupérer l'ID de l'AG dernièrement créé
        const fetchLatestAG = async () => {
        
            try {
                let {data : latestAG, error} = await supabase
                .from('latesttimeplace') //via create view
                .select('id_ag')
                .single()  //pour avoir une seule ligne en mode objet pour pas avoir le tableau

                console.log('latestAG :', latestAG)
                setIdAGToAdd(latestAG.id_ag) 

                console.log('latestAG :',idAGToAdd)
            }
            catch (error) {
                console.error('fetchLatestAG', error)
            }

        }


        /// Obtenir les valeur de l'AG la plus ancienne pour afficher la la vignette la step 2
        /// pour montrer l'AG à laquelle on est en train d'ajouter des sociétaires
        const fetchLatestAG2 = async () => {
        
            try {
                let {data : latestAGall, error} = await supabase
                .from('latesttimeplaceall') //via create view
                .select('*')

                if(latestAGall) {
                    setDataLastAG(latestAGall)
                }
            }
            catch (error) {
                console.error('fetchLatestAG2', error)
            }

        }


    // 2) fetchAddSocInPresents = ajout dans la table 'presents' le sociétaire et l'id_ag
        //// Insérer dans la table
        const fetchAddSocInPresents = async () => {

            let {data, error } = await supabase
            .from('presents')
            .insert([
                { id_ag: idAGToAdd,
                id_soc: idSocToAdd
                },
                ])
                .select()
    
                // en attendant que l'ajout d'une ag soit dans une page annexe
                // cela permet d'avoir le résultat de l'ajout de l'ag directement en cliquant sur le bouton
           window.location.href = '/jador/assembleegenerale'
        
            if (error) {
                console.error('fetchAddSocInPresents error :', error)
            }
            
        }

    const addSocInPresents =  () => {
         fetchLatestAG();
    }



    return (
        <div>

            <div>
            <h1>Création d'une nouvelle AG</h1>
            </div>

            <div className='formNewAG'>
                <form>
                    
                    <div>
                        <p>Commence par renseigner les infos spatio temporelles</p>
                    </div>
                
                    <div>
                    <p>Host : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setHostInput(e.target.value)}
                    value={hostInput}
                    placeholder = "ex: Ski, Camping, Chez Flavie, ... "
                    />
                    </p>
                    </div>

                    <div>
                    <p>Ville : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setVilleInput(e.target.value)}
                    value={villeInput}
                    />
                    </p>
                    </div>

                    <div>
                    <p>Année : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setYearInput(e.target.value)}
                    value={yearInput}
                    placeholder = "2024"
                    />
                    </p>
                    </div>

                    <div>
                    <p>Saison
                    <select
                    className='inputID'
                    onChange={(e) => setSaisonInput(e.target.value)}
                    value={saisonInput}>
                    <option>Choisis une saison</option>
                    <option>Automne/Hiver</option>
                    <option>Printemps/Été</option>
                    </select>
                    </p>
                    </div>
                
                </form>

                    <div >
                    <Bouton texteBouton="Ajout step 1" onClick={ajoutStepUne}/> 
                    </div>

            </div>
        <div>
            <div>
            <select
                className='ajoutParticipants'
                onChange= {takeSocID} 

                >
                <option value=''>Liste des sociétaires</option>

                {dataSocListe ? 
                (dataSocListe.map((item, index) => (
                <option key={index} value={item.prenom}>
                    {item.prenom}
                </option>
                )))
                : <option>pas de résultat</option>}

                </select>
            </div>

            <div id="boutonAddSoc">
                <Bouton texteBouton="Ajouter" onClick={addSocInPresents}/>
            </div>

            <div className='lesCardsAG'>
                {/* si dataAG (= résultat de la requête) comporte des données, alors... */}
                {dataLastAG ? (
                    //...alors pour chaque ligne de données dispo, rempli une card_AG et affiche là
                    dataLastAG.map((item, index) => (
                        <AG_card_simple key={index} year={item.year} season={item.season} place={item.place} host={item.host} id_ag={item.id_ag}/>
                    ))
                    //...sinon ou en attendant affiche le message d'attente
                ) : (<p>En cours de chargement...</p>)}
            </div>

        </div>

      
          
        </div>
    );
};

export default New_ag;