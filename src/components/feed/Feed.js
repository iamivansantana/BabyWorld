import React from 'react';
import BWTargetNames from '../bwTarget/BWTargetNames';
import './Feed.css';

const Feed = () => {
    return (
        <>
            <div className="feedContainer">
                <h2>Feed</h2>
                <BWTargetNames />
                <BWTargetNames />
                <BWTargetNames />
                <BWTargetNames />
            </div>
        </>
    )
}

export default Feed
