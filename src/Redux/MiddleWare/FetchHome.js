import axios from "axios";
import S3FileUpload from 'react-s3';

import {Url} from '../Url'
import {config} from "../../Admin/Config";

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

                    const res = axios.post(Url + "/api/gcc/v1/home", data)

                    console.log("Finished: ", res)
                })
                .catch(err => console.error(err));
        } else {
            const res = axios.put(Url + "/api/gcc/v1/home/1", data)
        }
    })

    // files.map(async (file, index) => {
    //
    //
    //     if (file !== undefined) {
    //         const name = "image" + (index + 1)
    //
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         const API_URL = Url + "/files";
    //
    //         const response = await axios.put(API_URL, formData);
    //
    //         data = {
    //             ...data,
    //             [name]: response.data.fileDownloadUri
    //         }
    //
    //         console.log("Data: ", data)
    //
    //         const res = axios.post(Url + "/api/gcc/v1/home", data)
    //
    //         console.log("Finished: ", res)
    //
    //     } else {
    //         console.log("Data: ", data)
    //
    //         const res = axios.put(Url + "/api/gcc/v1/home/1", data)
    //
    //         console.log("Finished: ", res)
    //     }
    // })

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