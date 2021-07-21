import Axios from "axios";

import { Url } from '../Url'

export const FetchEvents = () => async (dispatch, getState) => {

    try {
        const API_URL = Url + "/api/gcc/v1/events";
        const response = await Axios.get(API_URL)
        dispatch(
            {
                type: "SetEvents",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetEvents",
                payload: []
            }
        )
    }

}