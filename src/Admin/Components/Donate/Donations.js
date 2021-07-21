import React from 'react';
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";

function Donations() {

    React.useEffect(() => {
        fetchUserData().then(() => {
            // console.log("Logged in")
        }).catch(() => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (
        <div>
            Donations
        </div>
    );
}

export default Donations;
