import React from 'react';
import Header from '../../components/header/Header';
import "./ConseilAdmin.css"

const Conseiladmin = () => {
    return (
        <div>
            <Header/>

            <div id='textContentCA'>
            <h1>Conseil d'administration de l'association JAD'OR</h1>



            <h2>Les sociétaires sont :</h2>
            <ul>
                <li>M. Jean-François JADEAU</li>
                <li>Mme Anne-Lise STRICHER, née JADEAU</li>
                <li>Mme Marie-Josée VIGAN, née JADEAU</li>
                <li>Mme Valérie BERTRAND, née JADEAU</li>
                <li>Mme Carole JADEAU</li>
                <li>Mme Florence CABAN, née JADEAU</li>
                <li>M. David JADEAU</li>
                <li>Mme Lucie JADEAU</li>
                <li>Mme Flavie DESFONTAINE, née JADEAU</li>
                <li>Mme Coraline JADEAU</li>
                <li>M. Vincent GUILLET</li>
                <li>Mme Charline BESNIER, née GUILLET </li>
            </ul>

            <h2>Le bureau :</h2>
            <p>(élu au moment de la constitution de l'association)</p>
            <ul>
                <li>Présidente : Coraline</li>
                <li>Trésorière : Valérie</li>
                <li>Secrétaire : Lucie</li>
            </ul>

            </div>
        </div>
    );
};

export default Conseiladmin;