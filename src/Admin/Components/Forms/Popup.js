import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import {Controls} from "../../../Components";
import {makeStyles} from "@material-ui/styles"
import { Close } from '@material-ui/icons'
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    dialogWrapper: {
        margin: "32px 5px",
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(1)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        onClick={()=>{setOpenPopup(false)}}>
                        <Close />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
