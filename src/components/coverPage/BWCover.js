import React from 'react';
import './BWCover.css'

const BWCover = () => {
    return (
        <>
            <div className="vh-100 bw-cover" id="coverPage">
                <div className="bw-cover-content-blur">
                    <div className="bw-cover-contenedor">
                        <div className="bw-cover-content">
                            
                            <div className="bwPlanet">
                                <img  src="\assets\BW-Resources\world.svg" alt="mundo"/>
                            </div>
                            <div >
                                <img className="cloud cloud1"  src="\assets\BW-Resources\cloud1.svg" alt="cloud1"/>
                                <img className="cloud cloud2"  src="\assets\BW-Resources\cloud2.svg" alt="cloud2"/>
                                <img className="cloud cloud3"  src="\assets\BW-Resources\cloud3.svg" alt="cloud3"/>
                                <img className="cloud cloud4"  src="\assets\BW-Resources\cloud4.svg" alt="cloud4"/>
                                <img className="cloud cloud5"  src="\assets\BW-Resources\cloud1.svg" alt="cloud5"/>
                            </div>
                            <div className="bwFantasma">
                                <img  src="\assets\BW-Resources\bwGhost.svg" alt="ghost"/>
                            </div>
                            <div className="bwBaby">
                                <img className="bwBabySVG" src="\assets\BW-Resources\bwBaby2.svg" alt="baby"/>
                            </div>
                            <div className="bwWorld">
                                <img  src="\assets\BW-Resources\bwWorld2.svg" alt="worl"/>
                            </div>
                            <div className="bwDescription">
                                <h4>Una plataforma que te ayudará a lo largo del crecimiento / desarrollo de tú bebé.</h4>
                                <h3>PROXIMAMENTE</h3>
                            </div>
                            <div className="bwStores">
                                <img src="assets\BW-Resources\icons\appStoreInsignia.svg" alt="appstore"/>
                                <img src="assets\BW-Resources\icons\googleplayInsignia.png" alt="playstore"/>
                            </div>
                        </div>

                        <div className="bw-cover-dow">
                            <div className="bw-cover-content-grid">
                                <div className="white">
                                </div>
                                <div className="arrow">
                                    <a href="#infoPage">
                                        <img  src="\assets\BW-Resources\arrowDown.svg" alt="arrowDown"/>
                                    </a>
                                </div>
                                <div className="links">
                                    <a href='https://www.facebook.com/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration:'none'}}
                                        className="linksMediaFacebook">
                                        <img  src="\assets\BW-Resources\linkFacebook.svg" alt="toFacebook"/>
                                    </a>
                                    <a href='https://www.instagram.com/ivansanttana/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration:'none'}}
                                        className="linksMedia">
                                        <img  src="\assets\BW-Resources\linkInstagram.svg" alt="toInstagram"/>
                                    </a>
                                    <a href='https://twitter.com/iamivansantana'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration:'none'}}
                                        className="linksMedia">
                                        <img  src="\assets\BW-Resources\linkTwitter.svg" alt="toTwitter"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BWCover
