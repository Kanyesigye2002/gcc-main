
export const fetchData = () => {

    return {
        type: "Home",
    }
}

export const onChanged = (action) => {

    return {
        type: "CHANGEs",
        payload: action
    }
}

export const setImage = (action) => {
    return {
        type: "ImageUrl",
        payload: action
    }
}
export const setImageHome = (action) => {
    return {
        type: "ImageUrlHome",
        payload: action
    }
}

export const onSubmit = () => {
    return {
        type: "SUBMIT",
    }
}

export const onChangeEventAdd = (action) => {
    return {
        type: "ChangeEvent",
        payload: action
    }
}

export const onUpLoad = (action) => {
    return {
        type: "UpLoad",
        payload: action
    }
}

export const setImages = (action) => {
    return {
        type: "SetImages",
        payload: action
    }
}


