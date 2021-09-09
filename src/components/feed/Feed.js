import React from 'react';

import BWTargetArticulos from '../bwTarget/BWTargetArticulos';
import BWTargetNames from '../bwTarget/BWTargetNames';
// import BWTargetPrimerosAuxilios from '../bwTarget/BWTargetPrimerosAuxilios';
import './Feed.css';


const Feed = () => {
    return (
        <>
            <div className="feedContainer">
                <h2>Feed</h2>
                <BWTargetNames />
                <BWTargetArticulos id={11} />
                {/* <BWTargetArticulos id={22} /> */}
                {/* <BWTargetPrimerosAuxilios id={55} /> */}
                
            </div>
        </>
    )
}

export default Feed
