import React, { useState, useEffect } from 'react';
import "../index.css"
import "./Inscription.css"
import pinkLogo from "../../images/rondrose.png"
// import Textbox from '../components/textbox/Textbox';
import Bouton from '../../components/bouton/Bouton';
// console.log(process.env.REACT_APP_MDP_FORM)
import {supabase} from '../../supabase.ts';
//import axios from 'axios';


const Inscription = () => {

    // définition de l'état initiale de la valeur de l'input, donc vide
    const [mdp, setMdp] = useState("")
    // définition de la valeure initiale de showFormalaire (ligne 59)
    // true = affiche le contenu après && (
    // false = cache le contenu après && (
    const [showFormulaire, setShowFormulaire] = useState(false)
    // valeur de email
    const [email, setEmail] = useState("")
    // valeur de Prénom
    const [prenom, setPrenom] = useState("")
    // valeur du Nom
    const [nom, setNom] = useState("")
    // valeur de mot de pass
    const [password, setPassword] = useState("")
    // valeur des messages d'erreur
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // fonction rattachée à l'input onChange
    // ainsi, la valeur de mdp sera actualisé à chaque changement dans l'input
    const inputChange = (e) => {
    setMdp(e.target.value) 
        }

    // fonction rattaché au 1er bouton
    // si le mot de passe est bon, on change l'état de setShowFormulaire en true pour faire apparaitre le pavé
    const submit = async() => {

        let {data : dataBonMdp, error} = await supabase
        .from('patte_blanche')
        .select('key')
        .eq('id', 1)
        .single()

        if (mdp == dataBonMdp.key) {
            setShowFormulaire(true)
        }
        else {
            alert("Ce n'est pas le bon mot de passe. Es-tu vraiment Jadeau ? Recommence")
        }
    }
    
    ////////////////////////////////////////////////
    //////// CREATION COMPTE AVEC SUPABASE ////////

//////// Version sans le back
    //// Au click, fonction qui lance l'inscription
    // Tentative sans back avec claude
    const signup = async (e) => {
        e.preventDefault();
    
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
                full_name : prenom,
               // emailRedirectTo: 'http://www.jadeaudelaloire.com'
            }
          }
        });
    
        if (error) {
            setError(error.message);
            setMessage('');
            // Pop up pour annoncer une erreur
            alert('Oups ! Il y a un bug. Contact Coco en lui donnant le message suivant : Erreur : '&error&' - Message : '&message)

        } else {
            // Pop up pour annoncer la réussite
            alert('Inscription réussie ! Tu peux désormais te connecter avec ton adresse mail et ton mot de passe.');
            setError(email);

            // Rejoindre page de connexion
            window.location.href = '/login'
        }
      };


//////// Version sans avec back - A revoir
    // const signup = async() => {
    //     try {
    //         const response = await 
    //         //axios.post(`http://localhost:5005/auth/signup`);
    //         axios.get(`http://localhost:5005/auth/signup`, {
    //             emailform,
    //             password,
    //         });
    //         setMessage(response.data.message);
    //         setError(''); // Réinitialiser l'erreur si l'inscription réussit
    //       } catch (err) {
    //         setError(err.response.data.error || 'Une erreur est survenue');
    //         setMessage(''); // Réinitialiser le message si l'inscription échoue
    //       }
    // }
    //////////////////////////////////////////////////////////////////////////////////////////////


      

 
      

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
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        />
                        </p>
                        </div>

                        {/* <div className='formStep'>
                        <p className='inputP'>Nom : 
                        <input className='inputID'
                        type="text"
                        value={full_name}
                        onChange={(e) => setNom(e.target.value)}
                        />
                        </p>
                        </div> */}

                        <div className='formStep'>
                        <p className='inputP'>E-mail : 
                        <input className='inputID'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </p>
                        </div>

                        <div className='formStep'>
                        <p className='inputP'>Mot de passe : 
                        <input className='inputID'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </p>
                        </div>

                        <div className='formStep2'>
                        {/* <Bouton id='boutonID' texteBouton='OK' onClick={inscriptionNewUser}/> */}
                        <Bouton id='boutonID' texteBouton='OK' onClick={signup}/>
                        </div>

                    </form> )}
            </div>

        </div>
    );
};

export default Inscription;