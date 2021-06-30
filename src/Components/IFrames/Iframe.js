import React from 'react';

function Iframe() {
    return (
        <div className="h-50 video-div hover-Custom shadow-Custom">
            <div className="video-wrapper">
                <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/ytrnZHrsF5E"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Iframe;
