import React from 'react';
import Header from '../components/header/Header';
import {HashLink as Link} from 'react-router-hash-link';
import "./index.css"
import pdfDeclare from "../components/lesPDF/declaration_initiale.pdf"


const Statuts = () => {
    return (
        <div>
            <Header/>
            <div className='textContent'>
            <h1>Constitution de l'association JAD'OR</h1>
            <p>Vous trouverez sur cette page la documentation liée à la création de l'association JAD'OR :</p>
            <ul>
                <Link to="#statutsAss"><li>les statuts</li></Link>
                <Link to="#societaire"><li>la liste des membres sociétaires</li></Link>
                <Link to="#lettre"><li>la demande d'inscription</li></Link>
                <Link to="#parution"><li>la parution au journal officiel</li></Link>
            </ul>
                 <br/>

            <h2 id="statutsAss">Statuts de l’association JAD’OR</h2>
            <h3>Article 1er : Constitution – Dénomination</h3>
            <p>Il est fondé, entre les adhérents aux présents statuts, une association régie par la loi du 1er juillet 1901 et le décret de 16 août 1901, ayant pour titre : JAD’OR.</p>
            <h3>Article 2 : Objet – Durée</h3>
            <p>Cette association a pour but d’animer, de développer et de conserver un lien familial. Sa durée est illimitée, la dissolution de l’association devra être votée et approuvée par la majorité des sociétaires vivants. </p>
            <h3>Article 3 : Siège</h3>
            <p>Le siège social est localisé à « La Petite Brosse » à SOMLOIRE (49360). Il pourra être transféré par simple décision du Conseil d’Administration.</p>
            <h3>Article 4 : Membres</h3>
            <p>L’association se compose de membres d’honneur.</p>
            <h3>Article 5 : Admission</h3>
            <p>Pour faire partie de l’association, il faut être petit-fils ou petite-fille de Mr Joseph JADEAU, né le 24 novembre 1911 à Saint Maurice La Fougereuse (79150) et décédé le 16 juin 1997 à Cholet (49300) et de Mme Marguerite LOISEAU, épouse JADEAU, né le 14 novembre 1915 à Yzernay (49360) et décédé le 14 janvier 1990 à Cholet (49300).</p>
            <h3>Article 6 : Radiation</h3>
            <p>La qualité de membre se perd par la démission ou par le décès.</p>
            <h3>Article 7 : Ressources</h3>
            <p>Les ressources de l’association comprennent les dons manuels et les recettes diverses.</p>
            <h3>Article 8 : Assemblée générale</h3>
            <p>L’assemblée générale ordinaire comprend tous les membres de l’association, à quelque titre qu’ils y soient affiliés. L’assemblée générale ordinaire se réunit au moins une fois par an et à chaque fois qu’il est besoin sur convocation soit du président de l’association, soit de la majorité des membres du conseil, soit de la majorité des membres de l’association.
            <br/>Les membres de l’association sont convoqués au moins quinze jours avant la date fixée par lettre simple ou par courrier électronique. L’ordre de la convocation est indiqué sur les convocations.
            <br/>Le président assisté des membres du conseil, préside l’assemblée et expose la situation morale de l’association. Le trésorier rend compte de sa gestion et soumet le bilan à l’approbation de l’assemblée.
            <br/>L’assemblée générale délibère valablement à la majorité simple des membres présents ou représentés quel que soit le nombre de ses membres. Un membre compte pour une voix.
            <br/>L’assemblée générale est compétente pour nommer et révoquer le conseil, et pour approuver le rapport moral et financier du conseil, contrôler les comptes et décider de l’affectation des résultats.
            </p>
            <h3>Article 9 : Assemblée générale extraordinaire</h3>
            <p>Le conseil d’administration peut convoquer une assemblée générale extraordinaire statuant à la majorité des deux tiers des membres présents ou représentés en vue de la modification des statuts ou de la dissolution de l’association, réserve faite du transfert de siège social.
            <br/>La présence effective d’au moins la moitié des membres de l’association devra être constatée. A défaut, une nouvelle assemblée pouvant délibérer sans conditions de quorum sera convoquée dans les trois semaines.
            </p>
            <h3>Article 10 : Conseil d’administration</h3>
            <p>L’association est dirigée par un conseil de membres élus pour cinq années par l’assemblée générale. Les membres sont rééligibles.</p>
            <h3>Article 11 : Pouvoir du conseil</h3>
            <p>Le conseil est investi des pouvoirs les plus étendus pour prendre toutes les décisions qui ne sont pas réservées à l’assemblée générale. Il fixe notamment chaque année le montant des cotisations. Il peut déléguer certaines de ses attributions au bureau. Il rend compte de sa gestion à l’assemblée générale annuelle.
            Le conseil est seul compétent pour décider d’engager une action en justice.
            </p>
            <h3>Article 12 : Réunion du conseil d’administration</h3>
            <p>Le conseil d’administration se réunit au moins une fois tous les six mois, sur convocation du président ou sur la demande du quart de ses membres.
            Les décisions sont prises à la majorité des présents.
            Tout membre du conseil, qui, sans excuse, n’aura pas assisté à trois réunions consécutives pourra être considéré comme démissionnaire.
            Nul ne peut faire partie du conseil s’il n’est pas majeur.
            </p>
            <h3>Article 13 : Bureau</h3>
            <p>Le bureau est élu par le conseil d’administration. Il est composé de : un président, un ou plusieurs vice-présidents, un secrétaire général et, s’il y a lieu, un secrétaire général adjoint, un trésorier et, s’il y a lieu, un trésorier adjoint.
            Le bureau est élu pour cinq ans. Ses membres sont renouvelables.
            Le bureau assure la responsabilité de la gestion quotidienne de l’association.
            Le président représente l’association en justice et dans tous les actes de la vie civile.
            Toutefois, la décision d’engager une action en justice relève de la seule compétence du conseil d’administration.
            </p>
            <h3>Article 14 : Règlement intérieur</h3>
            <p>Un règlement intérieur peut être établi par le conseil d’administration qui le soumet à l’assemblée générale.
            Ce règlement éventuel est destiné à fixer les divers points non prévus par les statuts, notamment ceux qui ont trait à l’administration interne de l’association.
            </p>
            <h3>Article 15 : Dissolution</h3>
            <p>En cas de dissolution prononcée par l’assemblée générale extraordinaire, un ou plusieurs liquidateurs sont nommés par celle-ci et l’actif, s’il y a lieu, est dévolu conformément à l’article 9 de la loi du 1er juillet 1901 et au décret du 16 août 1901.</p>
            <h3>Article 16 : Formalités</h3>
            <p>Tous pouvoirs sont donnés au président ou au porteur d’un original des présents statuts pour effectuer les formalités légales de déclaration de publicité telles que prévues par la loi du 1er Juillet 1901 et du décret du 16 Août 1901.</p>

            <h2 id="societaire">Liste des sociétaires</h2>
            <p>Les sociétaires sont :</p>
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

            <h2 id="lettre">Demande d'inscription</h2>
            <p>La lettre de demande d'inscription a été envoyée le 14/07/2011 auprès de la sous-préfecture de Saumur (49).
            <br/><Link to={pdfDeclare} target="_blank" rel="noreferrer">Cliquez ici pour voir la lettre</Link>
            </p>

            <h2 id="parution">Parution au journal officiel</h2>
            <p>L'association a été ... dans le journal officiel du ....
                <br/><Link>Cliquez ici pour voir l'extrait de la parution</Link>
            </p>
            </div>
        </div>
    );
};

export default Statuts;