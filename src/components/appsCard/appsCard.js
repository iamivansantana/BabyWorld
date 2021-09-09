import React from 'react';
import './appsCard.css';

const AppsCard = ({ img, desc, color }) => {

    

    return (
        <>
            <div className="flexContent"> 
                <div className= {`bwApp-card  background${color}`}>
                    <div className="img-card"><img src={`/assets/BW-Resources/btns/${img}-btn.svg`} alt={img}/></div>
                </div>
                <div className= {'bwApp-card-body'}>
                    <div className="name-card">{img}</div>
                    <p className="desc-card">{desc}</p>
                    <button className="btn-card" type="button">¡Explorar más!</button>
                </div>
            </div>
        </>
    )
}

export default AppsCard
