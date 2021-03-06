import React from 'react';
import './appsCard.css';

const AppsCard = ({ children,img, color, flexAreaSide }) => {

    

    return (
        <>
            <div className={`flexContent ${flexAreaSide}`}> 
                <div className="flexIcon">
                    <div className= {`bwApp-card  background${color}`}>
                        <div className="img-card"><img src={`/assets/BW-Resources/btns/${img}-btn.svg`} alt={img}/></div>
                    </div>
                </div>
                <div className="flexText">
                    <div className= "bwApp-card-body">
                        <div className="name-card"><span>Descubre la sección</span><span style={{textTransform:'capitalize',fontWeight:'bold'}}> {img}</span>.</div>
                        <div className="desc-card">{children}</div>
                        <button className="btn-card" type="button">¡Explorar más!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppsCard
