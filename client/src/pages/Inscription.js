import React, { useState } from 'react';
import "./index.css"
import "./Inscription.css"
import pinkLogo from "../images/rondrose.png"
// import Textbox from '../components/textbox/Textbox';
import Bouton from '../components/bouton/Bouton';
// console.log(process.env.REACT_APP_MDP_FORM)


const Inscription = () => {

    // définition de l'état initiale de la valeur de l'input, donc vide
    const [mdp, setMdp] = useState("")
    // définition du bon mot de passe
    // let bonMdp = process.env.REACT_APP_MDP_FORM
    let bonMdp = process.env.REACT_APP_MDP_FORM
    // définition de la valeure initiale de showFormalaire (ligne 59)
    // true = affiche le contenu après && (
    // false = cache le contenu après && (
    const [showFormulaire, setShowFormulaire] = useState(false)

    // fonction rattachée à l'input onChange
    // ainsi, la valeur de mdp sera actualisé à chaque changement dans l'input
    const inputChange = (e) => {
    setMdp(e.target.value) 
        }

    // fonction rattaché au 1er bouton
    // si le mot de passe est bon, on change l'état de setShowFormulaire en true pour faire apparaitre le pavé
    const submit = ()=> {
        if (mdp == bonMdp) {
            setShowFormulaire(true)
        }
        else {alert("Ce n'est pas le bon mot de passe. Es-tu vraiment Jadeau ? Recommence")}
    }




    return (
        <div>
            <div>
            <h1 id='authText'><img src={pinkLogo}></img>Tu es Jadeau ? Inscris-toi !</h1>
            </div>

            

            <div className='classFormSignup'>

                    <div className='formStep'>
                    <p className='inputP'>Montre patte blanche : 
                    <input className='inputID'
                    type="password"
                    id="specialMDP"
                    value={mdp}
                    onChange={inputChange}
                    />
                    </p>
                    </div>

                    <div className='formStep2'>
                    <Bouton id='boutonID' texteBouton='Soumettre le mot de passe' onClick={submit}/>
                    </div>


                { showFormulaire && (
                <form id="formSignup">

                    <div><br/>Félicitation, tu as donné le mot de passe que seuls les Jadeau connaissent. 
                    <br/>Tu peux t'inscrire en complétant les champs suivants : 
                    <br/>
                    </div>

                    <div className='formStep'>
                    <p className='inputP'>Prénom : 
                    <input className='inputID'
                    type="text"
                    />
                    </p>
                    </div>

                    <div className='formStep'>
                    <p className='inputP'>Nom : 
                    <input className='inputID'
                    type="text"
                    />
                    </p>
                    </div>

                    <div className='formStep'>
                    <p className='inputP'>E-mail : 
                    <input className='inputID'
                    type="email"
                    />
                    </p>
                    </div>

                    <div className='formStep'>
                    <p className='inputP'>Mot de passe : 
                    <input className='inputID'
                    type="password"
                    />
                    </p>
                    </div>

                    <div className='formStep2'>
                    <Bouton id='boutonID' texteBouton='Création de mon compte'/>
                    </div>

                </form> )}
            </div>

        </div>
    );
};

export default Inscription;