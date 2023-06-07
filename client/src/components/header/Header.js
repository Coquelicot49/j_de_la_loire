import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import "./Header.css"

const Header = () => {
    return (
        <div className='blockHaut'>
            <div className='logodessus'><Logo/></div>
            <div className='navig'><Navigation/></div>
            
        </div>
    );
};

export default Header;