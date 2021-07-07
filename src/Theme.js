import React from 'react';
import {useDispatch} from "react-redux";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {FetchEvents, FetchHome, FetchImages, FetchMessages, FetchUsers} from "./Redux/MiddleWare";

import './Assets/CSS/style.css'
import Application from "./Application";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        // primary: {
        //     light: '#90806a',
        //     main: '#9a8262',
        //     dark: '#c49556',
        //     contrastText: '#fff',
        // },
        // primary: {
        //     light: '#f6685e',
        //     main: '#f44336',
        //     dark: '#aa2e25',
        //     contrastText: '#fff',
        // },
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
                <Application/>
            </ThemeProvider>
        </>
    );
}

export default Theme;