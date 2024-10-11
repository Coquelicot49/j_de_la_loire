import React, { useState } from 'react';
import "../index.css"
import "./Inscription.css"
import pinkLogo from "../../images/rondrose.png"
// import Textbox from '../components/textbox/Textbox';
import Bouton from '../../components/bouton/Bouton';
// console.log(process.env.REACT_APP_MDP_FORM)
import {supabase} from '../../supabase.ts';


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
    // valeur de email
    const [email, setEmail] = useState("")
    // valeur de mot de pass
    const [password, setPassword] = useState("")

    // fonction rattachée à l'input onChange
    // ainsi, la valeur de mdp sera actualisé à chaque changement dans l'input
    const inputChange = (e) => {
    setMdp(e.target.value) 
        }

    // fonction rattaché au 1er bouton
    // si le mot de passe est bon, on change l'état de setShowFormulaire en true pour faire apparaitre le pavé
    const submit = () => {
        if (mdp == bonMdp) {
            setShowFormulaire(true)
        }
        else {alert("Ce n'est pas le bon mot de passe. Es-tu vraiment Jadeau ? Recommence")}
    }

    
    ////////////////////////////////////////////////
    //////// CREATION COMPTE AVEC SUPABASE ////////
        
    //// Au click, fonction qui lance l'inscription
    const inscriptionNewUser = async() => {

        console.log("1 : "& email)
        console.log("1 : "& password)

       // setShowFormulaire(true)

    let { data, error } = await supabase.auth.signUp({
        
        email: email,
        password: password
      })

      console.log("2 : "& email)
      console.log("2 : "& password)

      // Rejoindre page de connexion
      window.location.href = '/login'

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
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </p>
                        </div>

                        <div className='formStep'>
                        <p className='inputP'>Mot de passe : 
                        <input className='inputID'
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </p>
                        </div>

                        <div className='formStep2'>
                        <Bouton id='boutonID' texteBouton='OK' onClick={inscriptionNewUser}/>
                        </div>

                    </form> )}
            </div>

        </div>
    );
};

export default Inscription;