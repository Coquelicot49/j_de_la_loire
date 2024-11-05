import React from 'react'
import { useState, useEffect } from "react";
import "./AG_card.css"
import Bouton from '../bouton/Bouton';
import {supabase} from '../../supabase.ts';
import axios from 'axios';


const AG_card = ({year, season, host, place, id_ag}) => {

    //AFFICHAGE DES SOCIETAIRES
    // Au besoin, setDataSOC prendra des valeurs différentes pour remplir les données dataSOC des AG_card
    const [dataSOC, setDataSOC] = useState(null)

    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);


    // useEffect pour fetcher la table "societaire" en totalité via "fetchSOC()"
    useEffect(() => {
        fetchSOC();
        }, []);


////// Requête 1 de AG_card.js \\\\\\

    // fonction/requête qui appelle toutes les données de la table/view "presents_soc_ag" (champs : id_ag - id_soc - prénom)
    // avec filtre sur id_ag = id_ag pour que chaque AG_CARD n'affiche que les prénoms concernant l'AG de la card
    const fetchSOC = async() => {
        try {
            // const response = await axios.get(`http://localhost:5005/presents_soc_ag/${id_ag}`);
            // if (response.status == 200) {
            //     setDataSOC(response.data);
            // } 
            let { data: soc_ag, error } = await supabase
            .from('present_soc_ag')
            .select('*')
            .eq('id_ag', id_ag)
            
            if (soc_ag) {
                setDataSOC(soc_ag)
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    // MODIFIER CARD_AG //
    const modifierAG = () => {
        alert("Fonction en cours de préparation par Coco.")
    }


    // DELETE CARD_AG //
    // fonction/requête qui supprime le rang associé à l'id_ag sélectionnée
    const deleteAG = async() => {

        try { 
            let { error } = await supabase
            .from('ag')
            .delete()
            .eq('id_ag', id_ag)
            window.location.href = '/jador/assembleegenerale'
        }
        catch (error) {
            // alert(error)
            console.log(error)
        }
    }



    return (
        <div>
            
            <div className="cardAG">

                <div className='yearAG'>
                    {year}
                </div>

                <div className='infoAG'>
                    {season}
                    <br/> {host}
                    <br/> {place}
                </div>

                <div className='presentielAG'>
                    Sociétaires présents :
                    {dataSOC ? ( dataSOC.map((item) => (
                    <ul className='liSocietaire' key={item.id_soc}>
                        <li className='liListeSoc'>{item.prenom}</li>
                    </ul>
                    ))): (
                        <ul className='liSocietaire'>
                        <li className='liListeSoc'>En cours de chargement...</li>
                    </ul> 
                    )}
                </div>


                <div className='modifAG'>
                    <Bouton className="boutonModifAG" texteBouton="✏️" onClick={()=>{modifierAG()}} />
                        
                    {/* <Bouton className="boutonSkipAG" texteBouton="❌" onClick={()=>{deleteAG({id_ag})}}/> */}
                    <Bouton className="boutonSkipAG" texteBouton="❌" onClick={() => {
                        if (window.confirm('Tu souhaites vraiment supprimer cet A.G. ?')) {
                            window.open(deleteAG({id_ag}), this.onCancel() )
                        }   
                        } } />

  
                </div>

            </div>

        </div>
    );
};

export default AG_card;