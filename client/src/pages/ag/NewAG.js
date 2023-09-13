import React from 'react';
import { useState, useEffect } from "react";
import {supabase} from '../../supabase.ts';

const NewAG = () => {

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
            let { data: societaires, error } = await supabase
            .from('societaires')
            .select('*')
          
            if (societaires) {
                setDataSOC(societaires)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <div className='presentielAG'>
                Sociétaires :
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
            
        </div>
    );
};

export default NewAG;