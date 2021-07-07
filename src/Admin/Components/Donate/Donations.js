import React from 'react';
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";

function Donations(props) {

    React.useEffect(() => {
        fetchUserData().then((response) => {
            console.log("Logged in")
        }).catch((e) => {
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
