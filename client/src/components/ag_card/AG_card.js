import React from 'react'
import "./AG_card.css"
import Bouton from '../bouton/Bouton';
import {supabase} from '../../supabase.ts';

const AG_card = ({year, season, host, place, id_ag}) => {


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
            alert(error)
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
                    <ul className='liSocietaire'>
                        <li>Valérie</li>
                        <li>Carole</li>
                        <li>Florence</li>
                        <li>David</li>
                        <li>Lucie</li>
                        <li>Vincent</li>
                        <li>Charline</li>
                        <li>Flavie</li>
                        <li>Coraline</li>
                    </ul>
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