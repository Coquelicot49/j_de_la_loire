import React from 'react'
import { useState, useEffect } from "react";
import "./AG_card.css"
import Bouton from '../bouton/Bouton';
import {supabase} from '../../supabase.ts';

const AG_card = ({year, season, host, place, id_ag}) => {

    //AFFICHAGE DES SOCIETAIRES
    // Au besoin, setDataSOC prendra des valeurs différentes pour remplir les données dataSOC des AG_card
    const [dataSOC, setDataSOC] = useState(null)

    // useEffect pour fetcher la table "societaire" en totalité via "fetchSOC()"
    useEffect(() => {
        fetchSOC();
        }, []);
    
    // fonction/requête qui appelle toutes les données de la table "societaires"
    const fetchSOC = async() => {
        try {
            let { data: soc_ag, error } = await supabase
            .from('presents_soc_ag')
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



    // DELETE CARD_AG //
    // fonction/requête qui supprime le rang associé à l'id_ag sélectionnée
    const deleteAG = async() => {
        try { 
            let { error } = await supabase
            .from('ag','presents')
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
                    <ul className='liSocietaire'>
                        <li className='liListeSoc'>{item.prenom}</li>
                    </ul>
                    ))): (
                        <ul className='liSocietaire'>
                        <li className='liListeSoc'>En cours de chargement...</li>
                    </ul> 
                    )}
                </div>


                <div className='modifAG'>
                    <Bouton className="boutonModifAG" texteBouton="✏️" />
                    <Bouton className="boutonSkipAG" texteBouton="❌" onClick={()=>{deleteAG({id_ag})}}/>
                </div>

            </div>

        </div>
    );
};

export default AG_card;