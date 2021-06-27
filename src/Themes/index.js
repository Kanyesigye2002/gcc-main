import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles'
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25',
            contrastText: '#fff',
        },
        secondary: {
            light: '#5393ff',
            main: '#2979ff',
            dark: '#1c54b2',
            contrastText: '#000',
        },
    }
})

const Theme = (props) => {
    console.log(theme)
    const {children} = props
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const withTheme = (Component) => {
    return (props) => (
        <Theme>
            <Component {...props} />
        </Theme>
    );
}
