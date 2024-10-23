import {React, useEffect, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '../../supabase.ts';

const ProtectedRoute = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      checkUser();
      
      // Set up auth state listener
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session);
        setLoading(false);
      });

      return () => {
        authListener?.subscription.unsubscribe();
      };
    }, []);
  
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>; // You can replace this with a loading spinner
    }
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };

export default ProtectedRoute;