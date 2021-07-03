import axios from "axios";

import {Url} from '../Url'
import S3FileUpload from "react-s3";
import {config} from "../../Admin/Config";
import {getToken} from "../AdminReducers/api/authenticationService";

export const UploadFile = (file, Data) => async (dispatch, getState) => {

    try {
        await S3FileUpload
            .uploadFile(file, config)
            .then(data => {
                const newData = {
                    ...Data,
                    fileName: data.location
                }
                axios({
                    method:'POST',
                    url:`${Url}/api/gcc/admin/v1/events`,
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