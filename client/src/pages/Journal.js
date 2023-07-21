import React from 'react';
import Header from '../components/header/Header';
import {HashLink as Link} from 'react-router-hash-link';
import "./index.css"
import pdfJournal from "../components/lesPDF/journal_de_guerre.pdf"

const Journal = () => {
    return (
        <div>
            <Header/>
            <div className='textContent'>
            <h1>Journal de guerre de Papy Jadeau</h1>
            <p>Introduction - texte de présentation sur le thème de Papy et la seconde guerre mondiale
                <br/>et pourquoi pas évoquer des anecdotes sur le père de papy et la première guerre mondiale
                <br/>auteur(s) à déterminer
            </p>
            <p>Accès aux documents :
                <ul>
                    <Link to={pdfJournal} target="_blank" rel="noreferrer"><li>Journal de guerre de Papy (version dactylographiée, 23 pages)</li></Link>
                    <li>Journal de guerre de Papy (version carnet scanné)</li>
                </ul>
            </p>
            </div>
        </div>
    );
};

export default Journal;