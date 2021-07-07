import axios from "axios";

import {Url} from '../Url'
import S3FileUpload from "react-s3";
import {config} from "../../Admin/Config";
import {getToken} from "../AdminReducers/api/authenticationService";

export const UploadUser = (file, Data) => async (dispatch, getState) => {

    try {
        await S3FileUpload
            .uploadFile(file, config)
            .then(data => {
                const newData = {
                    ...Data,
                    image: data.location
                }
                axios({
                    method:'POST',
                    url:`${Url}/api/v1/addUSer`,
                    headers:{
                        'Authorization':'Bearer '+getToken()
                    },
                    data: newData
                })
            })
            .catch(err => {
                console.error(err)
                axios({
                    method:'POST',
                    url:`${Url}/api/v1/addUSer`,
                    headers:{
                        'Authorization':'Bearer '+getToken()
                    },
                    data: Data
                })
            })
    } catch (err) {
        alert(err.message);
    }

};

export const FetchUsers = () => async (dispatch, getState) => {

    try {
        const API_URL = Url + "/api/gcc/v1/users";
        const response = await axios.get(API_URL)
        dispatch(
            {
                type: "SetUsers",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetUsers",
                payload: []
            }
        )
    }

}

export const UploadAdmin = (file, Data) => async (dispatch, getState) => {

    try {
        await S3FileUpload
            .uploadFile(file, config)
            .then(data => {
                const newData = {
                    ...Data,
                    image: data.location
                }
                axios({
                    method:'POST',
                    url:`${Url}/api/v1/addAdmin`,
                    headers:{
                        'Authorization':'Bearer '+getToken()
                    },
                    data: newData
                })
            })
            .catch(err => console.error(err))
    } catch (err) {
        alert(err.message);
    }

};

export const FetchAdmin = () => async (dispatch, getState) => {

    try {
        const API_URL = Url + "/api/v1/admin";
        const response = await axios.get(API_URL)
        dispatch(
            {
                type: "SetAdmin",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetAdmin",
                payload: []
            }
        )
    }

}