import axios from "axios";

import { Url } from '../Url'

export const UploadHome = (files, formEventData) => async (dispatch, getState) => {
    console.log(files, formEventData)

    let data = {
        ...formEventData
    }

    files.map(async (file, index) => {

        console.log("here")

        if (file !== undefined) {
            const name = "image" + (index+1)

            const formData = new FormData();
            formData.append("file", file);
            const API_URL = Url + "/files";

            const response = await axios.put(API_URL, formData);

            data = {
                ...data,
                [name]: response.data.fileDownloadUri
            }

            console.log("Data: ",data)

            const res = axios.post(Url + "/api/gcc/v1/home", data)

            console.log("Finished: ", res)

        } else {
            console.log("Data: ",data)

            const res = axios.put(Url + "/api/gcc/v1/home/1", data)

            console.log("Finished: ", res)
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