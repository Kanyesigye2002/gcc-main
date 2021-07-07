import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDropzone} from "react-dropzone";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    dropzoneContainer: {
        minHeight: 80,
        background: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa",
        width: "100%",
        color: "#3e3e3e"
    },
    preview: {
        width: "100%",
        display: "block",
        objectFit: "contain",
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        overFlow: 'hidden',
        backGroundColor: theme.palette.background.paper,
    },
}));

function ImageDrag(props) {

    const classes = useStyles();
    const onDrop = (acceptedFiles) => {
        props.drop(acceptedFiles)
    };
    const {getRootProps, getInputProps} = useDropzone({multiple: true, onDrop});

    const {ref, ...rootProps} = getRootProps();

    return (
        <>

                <Paper ref={ref} {...rootProps} elevation={0} className={classes.dropzoneContainer}>
                    <input {...getInputProps()} />
                    <Typography>Drag 'n' drop some files here, or click to select files</Typography>
                </Paper>

        </>
    );
}

export default ImageDrag;
