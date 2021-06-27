import Axios from "axios";

import { Url } from '../Url'


export const FetchImages = () => async (dispatch, getState) => {

    try {
        const API_URL = Url + "/api/gcc/v1/gallery";
        const response = await Axios.get(API_URL)
        dispatch(
            {
                type: "SetImages",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetImages",
                payload: []
            }
        )
    }

    try {
        const API_URL = Url + "/api/gcc/v1/gallery/categories";
        const response = await Axios.get(API_URL)
        dispatch(
            {
                type: "SetImageCategories",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetImageCategories",
                payload: []
            }
        )
    }


}