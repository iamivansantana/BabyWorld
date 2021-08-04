import React from 'react';
import './BWFooter.css';

const BWFooter = () => {
    return (
        <>
            <div className="footer-page" >
                <div className="footerContainer">
                    <div className="footerLogo"><img src="assets\BW-Resources\bwGhost.svg" alt="BWLogo"/></div>
                    <div className="footerGrid">
                        <div className="footerAddres">
                            <text>OFFICE</text>
                            <text>Satelite S/N, 39000</text>
                            <text>Guerrero, Mexico.</text>
                        </div>
                        <div className="footerEmail">E</div>
                        <div className="footerSocial">S</div>
                        <div className="footerTerms">T</div>

                    </div>
                </div>
            </div>    
        </>
    )
}

export default BWFooter
