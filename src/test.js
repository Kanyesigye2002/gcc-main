import React from 'react';

const styles = {
    width: "100%",
    height: "70vh",
    backgroundColor: "rgba(68,42,46,0.62)",
    position: "absolute"
}

function Test(props) {
    return (
        <div>
            <div className="logo" style={styles}>
                <img src="https://via.placeholder.com/200x100" />
            </div>
            <div className="content" style={styles}>
                <div id="links">dssdfsdfsdfsdf</div>
            </div>
        </div>
    );
}

export default Test;