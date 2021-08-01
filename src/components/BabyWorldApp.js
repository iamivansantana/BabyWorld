import React from 'react';
import './BabyWorldApp.css';
import BWContact from './contactPage/BWContact';
import BWCover from './coverPage/BWCover';
import BWFooter from './footerPage/BWFooter';
import BWInfo from './infoPage/BWInfo';
import BWNavBar from './navBar/BWNavBar';


const BabyWorldApp = () => {
    return (
        <>
            <div className="body-content">
                <BWNavBar />  
                <BWCover />
                <BWInfo />
                <BWContact />
                <BWFooter />
            </div>
        </>
    )
}

export default BabyWorldApp
