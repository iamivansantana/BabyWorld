import React from 'react';
import BWTargetArticulos from '../bwTarget/BWTargetArticulos';
import BWTargetNames from '../bwTarget/BWTargetNames';
import './Feed.css';

const Feed = () => {
    return (
        <>
            <div className="feedContainer">
                <h2>Feed</h2>
                <BWTargetNames />
                <BWTargetArticulos />
            </div>
        </>
    )
}

export default Feed
