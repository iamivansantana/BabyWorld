import React from 'react';
import './BWNavBar.css';

const BWNavBar = () => {
    return (
        <>
          <div className="navBarContent">
            <div className="flex">
              <div className="logo">
                <img src="\assets\BW-Resources\tittle.svg" alt="BabyWorldLogo"/>
              </div>
              <div className="menu"><p>HOME--ABOUT--CONTACT--...--LOGIN/REGISTER</p></div>
            </div>
          </div>
        </>
    )
}

export default BWNavBar
