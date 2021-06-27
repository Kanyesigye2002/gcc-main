export const Images = (state = [], action) => {

    switch (action.type) {
        case "SetImages":
            return action.payload;
        default:
            return state
    }

}

export const ImageCategories = (state = [], action) => {

    switch (action.type) {
        case "SetImageCategories":
            return action.payload;
        default:
            return state
    }

}

export const ImagesUpLoadData = (state = [], action) => {
    switch (action.type) {
        case "UpLoad":
            let image = []
            let newState = []

            console.log("State: ", state)

            state.map((category) => {
                    if (category.name === action.payload.category) {
                        image = category.images
                    } else {
                        newState.push(category)
                    }
                }
            )

            const all = [
                ...image,
                action.payload.image

            ]

            console.log("All Images: ", all)

            const category = {
                name: action.payload.category,
                images: all
            }

            return [
                ...newState,
                category
            ]
        default:
            return state
    }
}

export const AddImage = (state = [], action) => {
    switch (action.type) {
        case "AddImage":
            return state;
        default:
            return state
    }
}