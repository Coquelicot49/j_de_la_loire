import React from 'react';
import logo from "./logoJad.png"
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
      <div className="logo">
        <NavLink to="/accueil">
        <img src= {logo} alt="logo jado" />
        </NavLink>
      </div>
    );
};

export default Logo;