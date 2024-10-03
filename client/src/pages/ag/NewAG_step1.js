import React, { useCallback } from 'react'
import { useState, useEffect } from "react";
//import "./New_ag.css"
import Bouton from '../../components/bouton/Bouton.js';
import {supabase} from '../../supabase.ts';
import AG_card_simple from '../../components/ag_card/AG_card_simple.js';
import { NavLink } from 'react-router-dom';


const NewAG_step1 = () => {

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
    //const [dataSocListe, setDataSocListe] = useState("")
    
    // Valeur du sociétaire choisi dans le menu déroulant pour ajouter à la table PRESENTS via la fonction 'addSocInPresents'
    //const [choiceSocToAdd, setChoiceSocToAdd] = useState("")
    //const [idSocToAdd, setIdSocToAdd] = useState("")
    //const [idAGToAdd, setIdAGToAdd] = useState("")
    //const [dataReceived, setDataReceived] = useState(false);
    const [dataLastAG, setDataLastAG] = useState(null)
    //let idDuSoc
    const [showStep1, setShowStep1] = useState(false)
    //const [showStep2, setShowStep2] = useState(false)

    // FETCH DE LA TABLE SOCIETAIRES //
    // useEffect pour fetcher la table "societaires" en totalité via "fetchSOCliste()"


      useEffect(() => {
        if (hostInput != "")
        {fetchLatestAG2();}       
      }, []);

      
////////////////////////////     STEP 1   :  AJOUTER UNE NOUVELLE AG

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

    // Fonction qui Insert les infos dans AG > STEP 1
    const ajoutStepUne = async() => {
        
        if (hostInput != "" 
            && villeInput != ""
            && yearInput != ""
            && saisonInput != "") {


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
                //window.location.href = '/jador/assembleegenerale/newagstep1'

                fetchLatestAG2()

                setShowStep1(true)
                //setShowStep2(true)
                
        }
        catch (error) {
            console.log(error)
        }
        }
        else {alert("Tous les champs ne sont pas rempli.")}
    }






    return (
    <div>

            <div>
            <h1>Création d'une nouvelle AG - Quoi ? Où ? Quand ?</h1>
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
                    <Bouton texteBouton="Je valide ces informations" onClick={ajoutStepUne}/> 
                    </div>
                

            </div>


            <div>


                {showStep1 && (
                <div>
                <div id='addAGButton'>
                <NavLink to="/jador/assembleegenerale/newagstep2"><Bouton texteBouton="OK, je passe à l'étape suivante"/></NavLink>
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
               
               )}

            </div> 

          
    </div>
    );
};

export default NewAG_step1;