import React from 'react'
import { Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main,
        }
    },
}))

export default function ActionButton(props) {

    const { children, text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <Button
            variant={variant || "outlined"}
            {...other}
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
