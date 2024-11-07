import React, {useState, useEffect} from 'react';
import "../index.css"
import "./Login.css"
// import Logo from '../components/logo/Logo';
import pinkLogo from "../../images/rondrose.png"
import Bouton from '../../components/bouton/Bouton';
import {supabase} from '../../supabase.ts';
import { NavLink } from 'react-router-dom';
///// Page /reset


const ResetPassword = () => {

     // Valeur des champs
     const [newPassword, setNewPassword] = useState("")

  useEffect(() => {
    // Récupérer le hash de l'URL
    const hash = window.location.hash;
    
    // Vérifier si on a un token de type recovery
    if (hash && hash.substring(1).split('&')
      .find(param => param.startsWith('type=recovery'))) {
      // Extraire le token d'accès
      const accessToken = hash
        .substring(1)
        .split('&')
        .find(param => param.startsWith('access_token='))
        ?.split('=')[1];

      if (accessToken) {
        // Gérer la réinitialisation du mot de passe
        handlePasswordReset(accessToken);
      }
    }
  }, []);

  const handlePasswordReset = async (token) => {
    try {
      // Mettre à jour le mot de passe
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;
      
      // Rediriger vers la page de connexion après succès
      // Rejoindre page de connexion
      alert('Mot de passe pris en compte, reconnecte toi avec ce nouveau mot de passe.')
    window.location.href = '/login'
  } catch (error) {
      console.error('Erreur:', error.message);
    }


    }

    return (
        <div className='textContent'>

            <h1>Réinitialisation du mot de passe</h1>


            <div >

            <p> Tape ton nouveau mot de passe : 
              <br/> (Le mot de passe doit contenir au minimum 6 caractères 
                dont au moins une majuscule, une minuscule et un chiffre.)
              <br/>
            <input className='inputID'
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />
            </p>

                <div>
                    <Bouton texteBouton="OK" onClick={handlePasswordReset}/> 
                </div>
            </div>
            
        </div>
    );
};

export default ResetPassword;