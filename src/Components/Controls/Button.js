import React from 'react'
import { Button as MuiButton } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles"
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        margin: theme.spacing(0.5),
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(props) {

    const { children, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "outlined"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {children}
        </MuiButton>
    )
}
