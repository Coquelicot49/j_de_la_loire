import React from 'react';
import "./Textbox.css"

const Textbox = (inputName, inputType) => {
    return (
        <div className='classInput'>
        <p id='inputP'> {inputName} <input type={inputType} id='inputID'></input></p>
        </div>
    );
};

export default Textbox;