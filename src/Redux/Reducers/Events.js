export const Events = (state = [], action) => {

    switch (action.type) {
        case "SetEvents":
            return action.payload;
        default:
            return state
    }

}