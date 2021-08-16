import React from 'react';

import BWTargetArticulos from '../bwTarget/BWTargetArticulos';
import BWTargetNames from '../bwTarget/BWTargetNames';
import BWTargetPrimerosAuxilios from '../bwTarget/BWTargetPrimerosAuxilios';
import './Feed.css';


const Feed = () => {
    return (
        <>
            <div className="feedContainer">
                <h2>Feed</h2>
                <BWTargetNames />
                <BWTargetArticulos id={'uno'} />
                <BWTargetPrimerosAuxilios id={'uno'} />
                
            </div>
        </>
    )
}

export default Feed
