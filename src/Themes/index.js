import React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        mode: "dark",
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
    console.log()
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
