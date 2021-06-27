import React, {useState} from 'react';

import '../../Assets/CSS/Menu/MenuIcon.css'

function MenuIcon(props) {

    const [status, setClass] = useState("containers")

    const set = () => {
        console.log(props.onToggle)
        if (status === "containers") {
            setClass("change")
        } else {
            setClass("containers")
        }
    }


    return (
        <div onClick={props.click}>
            <div className={status} onClick={set}>
                <div className="bar1"/>
                <div className="bar2"/>
                <div className="bar3"/>
            </div>
        </div>

    );
}

export default MenuIcon;
