import React from 'react';
import "./index.css"
import "./Inscription.css"
import pinkLogo from "../images/rondrose.png"
// import Textbox from '../components/textbox/Textbox';
import Bouton from '../components/bouton/Bouton';


const Inscription = () => {
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
                    //value= "specialMDP"
                    />
                    </p>
                    </div>

                    <div className='formStep2'>
                    <Bouton id='boutonID' texteBouton='Soumettre le mot de passe'/>
                    </div>


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

                </form>
            </div>

        </div>
    );
};

export default Inscription;