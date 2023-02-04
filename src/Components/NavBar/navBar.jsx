import React from 'react';
import './NavBar.css';
import nitc from './nitc.png';
import lostnfound from './lostnfound.png';

function navBar(){
  return(
    <div className='NavBar'>
        <div className='nitcLogo'>
            <img src= {nitc} alt="Loading" />

        </div>
        <div className='NavHead'>
        
        </div>
        <div className = 'LnFLogo'> 
          <img src={lostnfound} alt="Loading" />
        </div>

    </div>
  )
}
export default navBar;