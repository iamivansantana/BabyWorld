import React from 'react';
import './BabyWorldApp.css';
import BWContact from './contactPage/BWContact';
import BWCover from './coverPage/BWCover';
import BWFooter from './footerPage/BWFooter';
import BWInfoUs from './infoUs/BWInfoUs';
import BWNavBar from './navBar/BWNavBar';


const BabyWorldApp = () => {
    return (
        <>
            <div className="body-content">
                <BWNavBar />  
                <BWCover />
                <BWInfoUs />
                <BWContact />
                <BWFooter />
            </div>
        </>
    )
}

export default BabyWorldApp
