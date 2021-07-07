import React from 'react';
import axios from 'axios';
import {Url} from "../../Url";


export const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{

    console.log("Request Data: ", authRequest)

    return axios({
        "method":'POST',
        "url":`${Url}/api/v1/auth/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${Url}/api/v1/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}