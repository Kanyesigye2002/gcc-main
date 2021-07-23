export const homeData = (state = {}, action) => {
    switch (action.type) {
        case "SetHome":
            return action.payload
        default:
            return state
    }
}

export const homeForm = (state = {}, action) => {
    switch (action.type) {
        case "SetHome":
            return action.payload
        case "CHANGE":
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        default:
            return state
    }
}