import React from 'react'
import "./AG_card.css"
import Bouton from '../bouton/Bouton';

const AG_card = ({year, season, host, place}) => {
    return (
        <div>
            
            <div className="cardAG">

                <div className='yearAG'>
                    {year}
                </div>

                <div className='infoAG'>
                    {season}
                    <br/> {host}
                    <br/>{place}
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
                    <Bouton className="boutonModifAG" texteBouton="✏️"/>
                    <Bouton className="boutonSkipAG" texteBouton="❌"/>
                </div>

            </div>

        </div>
    );
};

export default AG_card;