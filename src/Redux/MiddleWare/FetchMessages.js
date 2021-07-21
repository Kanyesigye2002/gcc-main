import Axios from "axios";

import { Url } from '../Url'

export const FetchMessages = () => async (dispatch, getState) => {
    try {
        const API_URL = Url + "/api/gcc/v1/message";
        const response = await Axios.get(API_URL).catch(reason => {
            dispatch(
                {
                    type: "SetMessages",
                    payload: reason
                }
            )
        })
        dispatch(
            {
                type: "SetMessages",
                payload: response.data
            }
        )
    } catch (e) {
        console.log(e)
        dispatch(
            {
                type: "SetMessages",
                payload: {}
            }
        )
    }

}