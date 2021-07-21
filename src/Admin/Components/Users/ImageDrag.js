import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {useDropzone} from "react-dropzone";
import Avatar from "@material-ui/core/Avatar";
import {AccountCircle} from "@material-ui/icons";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    dropzoneContainer: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        borderRadius: 100,
        background: "#efefef00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa",
    },
    preview: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

function ImageDrag(props) {

    const classes = useStyles();
    const onDrop = (acceptedFiles) => {
        props.drop(acceptedFiles)
    };
    const { getRootProps, getInputProps } = useDropzone({multiple: false, onDrop});


    const { ref, ...rootProps } = getRootProps();

    return (
        <>
            <>
                <Paper ref={ref} {...rootProps} elevation={0} className={classes.dropzoneContainer}>
                    <input {...getInputProps()} />
                    {
                        props.prev === undefined && (
                            <AccountCircle className={classes.preview}/>
                        )
                    }
                    {
                        props.prev !== undefined && (
                            <Avatar
                                onLoad={() => URL.revokeObjectURL(props.prev)}
                                alt="gcc"
                                src={props.prev || "https://via.placeholder.com/250"}
                                className={classes.preview} />
                        )
                    }
                </Paper>
            </>
        </>
    );
}

export default ImageDrag;
