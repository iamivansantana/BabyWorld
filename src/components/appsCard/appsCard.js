import React from 'react';
import './appsCard.css';

const AppsCard = ({ img, desc, color }) => {

    return (
        <>
            <div className="flexContent">
                <div className= {`bwApp-card  background${color}`}>
                    <div className="img-card"><img src="\assets\BW-Resources\toggleHome.svg" alt="home"/></div>
                    <div className="name-card">Temperatura</div>
                </div>
                <div>
                    <p className="desc-card">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default AppsCard
