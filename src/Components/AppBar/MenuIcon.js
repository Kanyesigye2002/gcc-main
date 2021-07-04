import React, {useState} from 'react';

import '../../Assets/CSS/Menu/MenuIcon.css'

function MenuIcon(props) {

    const [status] = useState(props.open?"change":"containers")

    return (
        <div onClick={props.click}>
            {console.log("Menu talk",props.open)}
            <div className={status}>
                <div className="bar1"/>
                <div className="bar2"/>
                <div className="bar3"/>
            </div>
        </div>

    );
}

export default MenuIcon;
