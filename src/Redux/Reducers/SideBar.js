const initialState = {
    top: false,
    left: false,
    bottom: false,
    right: false,
}

export const changeState = (state = initialState, action) => {
    switch (action.type) {
        case 'set':
            return action.payload
        default:
            return state
    }
}
