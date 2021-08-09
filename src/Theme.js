import React from 'react';
import {useDispatch} from "react-redux";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {FetchEvents, FetchHome, FetchImages, FetchMessages, FetchUsers} from "./Redux/MiddleWare";

import './Assets/CSS/style.css'
import Application from "./Application";
import {useMediaQuery} from "@material-ui/core";
import {MUISwitch} from "./Components/Switcher/Switcher";

const Theme = () => {

    const [checked, setChecked] = React.useState(localStorage.getItem("theme") !== undefined && localStorage.getItem("theme") === "false" ?  false : true);

    const theme = createTheme({
        palette: {
            mode: checked ? "light":"dark",
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

    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchEvents())
        dispatch(FetchMessages())
        dispatch(FetchHome())
        dispatch(FetchImages())
        dispatch(FetchUsers())
    }, [])

    const handleChange = (event) => {
        setChecked(event.target.checked);
        localStorage.setItem("theme", event.target.checked)
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Application theme={theme} checked={checked} setChecked={handleChange}/>
                {isMobile? <></>:
                    <>
                        <div
                            style={{
                                position: "fixed",
                                bottom: 15,
                                right: 15,
                                maxWidth: "fit-content"
                            }}
                        >
                            <MUISwitch checked={checked} onChange={handleChange}/>
                        </div>
                    </>
                }
            </ThemeProvider>
        </>
    );
}

export default Theme;