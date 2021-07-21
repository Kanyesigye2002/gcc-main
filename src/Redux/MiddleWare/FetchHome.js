import axios from "axios";
import S3FileUpload from 'react-s3';

import {Url} from '../Url'
import {config} from "../../Admin/Config";
import {getToken} from "../AdminReducers/api/authenticationService";

export const UploadHome = (files, formEventData) => async (dispatch, getState) => {
    console.log(files, formEventData)

    let data = {
        ...formEventData
    }

    files.map((file, index) => {
        if (file !== undefined) {
            console.log(file)
            console.log(file.file)
            S3FileUpload
                .uploadFile(file, config)
                .then(response => {

                    const name = "image" + (index + 1)

                    data = {
                        ...data,
                        [name]: response.location
                    }

                    axios({
                        method:'POST',
                        url:`${Url}/api/gcc/admin/v1/home`,
                        headers:{
                            'Authorization':'Bearer '+getToken()
                        },
                        data: data
                    })
                })
                .catch(err => console.error(err));
        } else {
            axios({
                method:'Put',
                url:`${Url}/api/gcc/admin/v1/home/1`,
                headers:{
                    'Authorization':'Bearer '+getToken()
                },
                data: data
            })
        }
    })
}

export const FetchHome = () => async (dispatch, getState) => {
    try {
        const API_URL = Url + "/api/gcc/v1/home/1";
        const response = await axios.get(API_URL).catch(reason => {
            dispatch(
                {
                    type: "SetHome",
                    payload: reason
                }
            )
        })
        console.log(response.data)
        dispatch(
            {
                type: "SetHome",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetHome",
                payload: {}
            }
        )
    }

}

