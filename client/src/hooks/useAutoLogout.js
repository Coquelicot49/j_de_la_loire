import { useEffect, useState } from 'react';
import {supabase} from '../supabase.ts';
//import { supabase } from '../../supabaseClient.ts'; // Ajustez le chemin selon votre configuration


// 2 heures en millisecondes
const AUTO_LOGOUT_TIME = 2 * 60 * 60 * 1000; 
// 2 minutes en millisecondes
// const AUTO_LOGOUT_TIME = 0 * 2 * 60 * 1000;

const useAutoLogout = () => {
  const [lastActivity, setLastActivity] = useState(Date.now());

  // Fonction de déconnexion
  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  useEffect(() => {
    // Gestionnaire d'événements pour suivre l'activité de l'utilisateur
    const updateLastActivity = () => {
      setLastActivity(Date.now());
    };

    // Événements à surveiller pour l'activité
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart'
    ];

    // Ajouter les écouteurs d'événements
    events.forEach(event => {
      document.addEventListener(event, updateLastActivity);
    });

    // Vérifier l'inactivité toutes les minutes
    const checkInactivity = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivity;
      if (timeSinceLastActivity >= AUTO_LOGOUT_TIME) {
        logout();
      }
    }, 60000); // Vérification chaque minute

    // Gérer la fermeture de la page
    const handleTabClose = () => {
      logout();
    };

    window.addEventListener('beforeunload', handleTabClose);

    // Nettoyer les écouteurs d'événements
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateLastActivity);
      });
      clearInterval(checkInactivity);
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [lastActivity]);
};

export default useAutoLogout;