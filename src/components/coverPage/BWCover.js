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
                                <img className="cloud cloud1"  src="\assets\BW-Resources\cloud1.svg" alt="mundo"/>
                                <img className="cloud cloud2"  src="\assets\BW-Resources\cloud2.svg" alt="mundo"/>
                                <img className="cloud cloud3"  src="\assets\BW-Resources\cloud3.svg" alt="mundo"/>
                                <img className="cloud cloud4"  src="\assets\BW-Resources\cloud4.svg" alt="mundo"/>
                                <img className="cloud cloud5"  src="\assets\BW-Resources\cloud1.svg" alt="mundo"/>
                            </div>
                            <div className="bwFantasma">
                                <img  src="\assets\BW-Resources\bwGhost.svg" alt="mundo"/>
                            </div>
                            <div className="bwBaby">
                                <img  src="\assets\BW-Resources\bwBaby.svg" alt="mundo"/>
                            </div>
                            <div className="bwWorld">
                                <img  src="\assets\BW-Resources\bwWorld.svg" alt="mundo"/>
                            </div>
                        </div>
                        <div className="bw-cover-dow">
                            <div className="bw-cover-content-grid">
                                <div className="white"></div>
                                <div className="arrow"></div>
                                <div className="links"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BWCover
