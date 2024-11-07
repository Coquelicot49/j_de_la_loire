import React from 'react';
import Header from '../../components/header/Header';
import {HashLink as Link} from 'react-router-hash-link';
import "../index.css"
import pdfJournal from "../../components/lesPDF/journal_de_guerre.pdf"
import pdfCartesGuerre from "../../components/lesPDF/cartes_guerre.pdf"
import pdfCarnet1 from "../../components/lesPDF/carnet_papi_1bis.pdf"

const Journal = () => {
    
    return (
            <div>
                <Header/>
                <div className='textContent'>
                <h1>Journal de guerre</h1>
                <p>Introduction - APPEL À TÉMOIN pour un texte de présentation sur le thème de Papy et la seconde guerre mondiale
                    <br/>et pourquoi pas évoquer des anecdotes sur le père de papy et la première guerre mondiale...
                </p>
                <p>Accès au carnet de guerre de Papy en version orginal et dactylographiée :
                    <ul>
                        <Link to={pdfJournal} target="_blank" rel="noreferrer"><li>Journal de guerre de Papy (version dactylographiée, 23 pages)</li></Link>
                        <Link to={pdfCarnet1} target="_blank" rel="noreferrer"><li>Journal de guerre de Papy (version carnet scanné)</li></Link>
                    </ul>
                </p>
                <p>Quelques cartes postales envoyées à Mamie par Papi :
                    <ul>
                        <Link to={pdfCartesGuerre} target="_blank" rel="noreferrer"><li>Quelques cartes postales envoyées par Papi à Mamie pendant la guerre</li></Link>
                    </ul>
                </p>
                </div>
            </div>
        );
    };
    export default Journal;