import React from 'react';
import './BabyWorldApp.css';
import BWCover from './coverPage/BWCover';
import BWInfoUs from './infoUs/BWInfoUs';
import BWNavBar from './navBar/BWNavBar';


const BabyWorldApp = () => {
    return (
        <>
            <div className="body-content">
                <BWNavBar />  
                <BWCover />
                <BWInfoUs />
            </div>
        </>
    )
}

export default BabyWorldApp
