import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav>
            
            <ul>
                <li className="menuContacts" ><NavLink  to="/contact">CONTACTS</NavLink>
                        <ul className="submenu">
                            <li><NavLink  to="/contact/carnetadresse">Carnet d'adresse</NavLink></li> 
                        </ul>
                </li>

                <li className="menuEvents"><NavLink to="/events">ÉVÉNEMENTS</NavLink>
                        <ul className="submenu">
                            <li><NavLink to="/events/calendrier">Calendrier des anniversaires </NavLink></li>
                            <li><NavLink to="/events/retrouvailles">Prochaines retrouvailles</NavLink></li>
                        </ul>
                </li>
                
                <li className="menuJeux"><NavLink to="/jeux">JEUX</NavLink>
                        <ul className="submenu">
                            <li><NavLink to="/jeux/quiz">Quiz</NavLink></li>
                            <li><NavLink to="/jeux/quiestce">Qui est-ce ?</NavLink></li>
                        </ul>
                </li>
                        
                <li className="menuMemories"><NavLink to="/memories">MÉMOIRE</NavLink>
                        <ul className="submenu">
                            <li><NavLink to="/memories/journalguerre">Journal de guerre</NavLink></li>
                            <li><NavLink to="/memories/arbregen">Arbre généalogique</NavLink></li>
                            <li><NavLink to="/memories/souvenirs">Souvenirs</NavLink></li>
                        </ul>
                </li>

                <li className="menuJador"><NavLink to="/jador">JAD'OR</NavLink>
                        <ul className="submenu">
                            <li><NavLink to="/jador/statuts">Les statuts</NavLink></li>
                            <li><NavLink to="/jador/conseiladmin">Conseil d'administration</NavLink></li>
                            <li><NavLink to="/jador/assembleegenerale">Assemblées générales</NavLink></li>
                            <li><NavLink to="/jador/don">Faire un don</NavLink></li>
                        </ul>
                </li>

                <li className="menuMonCompte"><NavLink to="/moncompte">MON COMPTE</NavLink>
                        <ul className="submenu">
                            <li><NavLink to="/moncompte/parameters">Mes paramètres</NavLink></li>
                            <li><NavLink to="/moncompte/logout">Déconnexion</NavLink></li>
                        </ul>
                </li>

            </ul>           
        </nav>
    );
};

export default Navigation;