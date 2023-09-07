import React from 'react';
import Header from '../components/header/Header';
import AG_card from '../components/ag_card/AG_card';

const AssGen = () => {
    return (
        <div>
            <Header/>
            <p>Ceci est la page Jad'or - Assemblée générale</p>

            <AG_card/>
        </div>
    );
};

export default AssGen;