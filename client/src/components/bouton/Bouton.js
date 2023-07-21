import React from 'react';
import "./Bouton.css"

const Bouton = ({onClick, texteBouton, classbouton}) => {
    return (
      <div className='classbouton'>
  
        <button onClick={ onClick } >{texteBouton}</button>
  
      </div>
      
    )
  }

export default Bouton;