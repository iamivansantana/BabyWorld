import React from 'react';
import './appsCard.css';

const AppsCard = ({ img, desc, color }) => {

    return (
        <>
            <div className="flexContent">
                <div className= {`bwApp-card  background${color}`}>
                    {/* <div className="img-card"><img src={`\assets\BW-Resources\btns\${color}-btn.svg`} alt="home"/></div> */}
                    <div className="img-card"><img src={`/assets/BW-Resources/btns/${img}-btn.svg`} alt={img}/></div>
                    <div className="name-card">{img}</div>
                </div>
                <div>
                    <p className="desc-card">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default AppsCard
