import React from 'react'
import { useState, useEffect } from "react";
import "./New_ag.css"
import Bouton from '../bouton/Bouton';
import {supabase} from '../../supabase.ts';


const New_ag = () => {

    // Valeur des l'input pour table AG
    const [hostInput, setHostInput] = useState("")
    const [villeInput, setVilleInput] = useState("")
    const [yearInput, setYearInput] = useState("")
    const [saisonInput, setSaisonInput] = useState("")
    const [comment, setComment] = useState(null)


    // useEffect(() => {
    //     ajoutStepUne()
    //   }, []);




    //   const { data, error } = await supabase
    //   .from('ag')
    //   .insert([
    //     { some_column: 'someValue', other_column: 'otherValue' },
    //   ])
    //   .select()
    
    

    // Fonction qui Insert les infos dans AG 
    const ajoutStepUne = async() => {
     //  console.log("Bouton cliqué")
        try {
            let {data, error } = await supabase
            .from('ag')
            .insert([
                { host: hostInput ,
                place: villeInput ,
                year: yearInput,
                season: saisonInput ,
                comment: comment,
                time_place: new Date().toISOString()
            },
                ])
                .select()
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div>

            <div>
            <h1>Création d'une nouvelle AG</h1>
            </div>

            <div className='formNewAG'>
                <form>
                    
                    <div>
                        <p>Commence par renseigner les infos spatio temporelles</p>
                    </div>
                
                    <div>
                    <p>Host : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setHostInput(e.target.value)}
                    value={hostInput}
                    placeholder = "ex: Ski, Camping, Chez Flavie, ... "
                    />
                    </p>
                    </div>

                    <div>
                    <p>Ville : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setVilleInput(e.target.value)}
                    value={villeInput}
                    />
                    </p>
                    </div>

                    <div>
                    <p>Année : 
                    <input className='inputID'
                    type="texte"
                    onChange={(e) => setYearInput(e.target.value)}
                    value={yearInput}
                    placeholder = "2024"
                    />
                    </p>
                    </div>

                    <div>
                    <p>Saison
                    <select
                    className='inputID'
                    onChange={(e) => setSaisonInput(e.target.value)}
                    value={saisonInput}>
                    <option>Choisis une saison</option>
                    <option>Automne/Hiver</option>
                    <option>Printemps/Été</option>
                    </select>
                    </p>
                    </div>
                
                </form>

                    <div >
                    <Bouton texteBouton="Ajout step 1" onClick={ajoutStepUne}/> 
                    </div>

            </div>
          
        </div>
    );
};

export default New_ag;