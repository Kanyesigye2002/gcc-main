import React from 'react';
import {useDispatch} from "react-redux";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {FetchEvents, FetchHome, FetchImages, FetchMessages, FetchUsers} from "./Redux/MiddleWare";

import './Assets/CSS/style.css'
import Application from "./Application";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        secondary: {
            light: '#5393ff',
            main: '#3a76dc',
            dark: '#1c54b2',
            contrastText: '#fff',
        },
    },
})

const Theme = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchEvents())
        dispatch(FetchMessages())
        dispatch(FetchHome())
        dispatch(FetchImages())
        dispatch(FetchUsers())
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                {console.log(theme)}
                <Application/>
            </ThemeProvider>
        </>
    );
}

export default Theme;