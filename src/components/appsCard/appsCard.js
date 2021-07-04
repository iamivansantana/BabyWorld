import React from 'react';
import './appsCard.css';

const AppsCard = ({ img, desc, color }) => {

    return (
        <>
            <div className="flexContent">
                <div className= {`bwApp-card  background${color}`}>
                    <div>uno</div>
                    <div>dos</div>
                </div>
                <div>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default AppsCard
