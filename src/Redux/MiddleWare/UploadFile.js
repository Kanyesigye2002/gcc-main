import axios from "axios";

import { Url } from '../Url'

export const UploadFile = (file, Data) => async (dispatch, getState) => {

    try {
        const formData = new FormData();
        formData.append("file", file);
        console.log("files got ", file);
        const API_URL = Url + Url + "/files";

        const response = await axios.put(API_URL, formData);

        console.log("Response1: ", response)

        const newData = {
            ...Data,
            fileName: response.data.fileDownloadUri
        }

        console.log(newData)

        const res = axios.post(Url + "/api/gcc/v1/events", newData)

        console.log("Finished: ", res)


    } catch (err) {
        alert(err.message);
    }

};