import React from 'react';
import './BWCover.css'

const BWCover = () => {
    return (
        <>
            <div className="vh-100 bw-cover">
                <div className="bw-cover-content-blur">
                    <div className="bw-cover-contenedor">
                        <div className="bw-cover-content">Content</div>
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
