import axios from "axios";

import { Url } from '../Url'
import S3FileUpload from "react-s3";
import {config} from "../../Admin/Config";

export const UploadFile = (file, Data) => async (dispatch, getState) => {

    try {
        const response = await S3FileUpload
            .uploadFile(file, config)
            .then(data => {
                const newData = {
                    ...Data,
                    fileName: data.location
                }

                console.log(newData)

                const res = axios.post(Url + "/api/gcc/v1/events", newData)

                console.log("Finished: ", res)
                console.log(data)
            })
            .catch(err => console.error(err))



    } catch (err) {
        alert(err.message);
    }

};