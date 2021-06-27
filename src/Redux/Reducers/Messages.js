export const messagesData = (state = {}, action) => {
    switch (action.type) {
        case "SetMessages":
            return action.payload
        default:
            return state
    }
}