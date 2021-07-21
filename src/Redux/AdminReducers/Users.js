export const Users = (state = [], action) => {

    switch (action.type) {
        case "SetUsers":
            return action.payload;
        default:
            return state
    }

}