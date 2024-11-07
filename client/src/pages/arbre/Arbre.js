import React from 'react';
import Header from '../../components/header/Header';
import {HashLink as Link} from 'react-router-hash-link';
import "../index.css"
import pdfArbreSerge from "../../components/lesPDF/arbre_asc_jadeau_serge.pdf"
import pdfAscSerge from "../../components/lesPDF/ascendant_serge_jadeau.pdf"
import pdfArbre from "../../components/lesPDF/arbre.pdf"

const Arbre = () => {

    return (
        <div>
            <Header/>
            <div className='textContent'>
            <h1>Notre généalogie</h1>
            <p>Ici, vous trouverez les documents concernant la généalogie de la famille Jadeau / Loiseau.
            </p>
            <p>Certains d'entre eux se base sur Serge.
            <br/>Mais Serge, c'est comme François, Jean-Marie, Joseph, Cado et Mare-France, n'est-ce pas ?
            </p>
            <p>Accès aux documents :
                <ul>
                    <Link to={pdfArbre} target="_blank" rel="noreferrer"><li>Arbre généalogique sous forme d'arbre (jusqu'au 18ème siècle)</li></Link>
                    <p>Recherches et réalisation par Jojo.</p>
                    <Link to={pdfArbreSerge} target="_blank" rel="noreferrer"><li>Arbre généalogique sous forme de cercle</li></Link>
                    <p>Recherches réalisées par Serge Paquereau (cousin de Marie-Paule) en 2020.</p>
                    <Link to={pdfAscSerge} target="_blank" rel="noreferrer"><li>Arbre généalogique sous forme de tableau (jusqu'à la 11ème génération, soit début du 17ème siècle)</li></Link>
                    <p>Recherches réalisées par Serge Paquereau (cousin de Marie-Paule) en 2020.</p>
                </ul>
            </p>

            </div>
        </div>
    );
};
export default Arbre;