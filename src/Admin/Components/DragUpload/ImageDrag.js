import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {useDropzone} from "react-dropzone";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    dropzoneContainer: {
        minHeight: 200,
        background: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa",
    },
    preview: {
        width: "100%",
        display: "block",
        objectFit: "contain",
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
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        )
                    }
                    {
                        props.prev !== undefined && (
                            <img
                                onLoad={() => URL.revokeObjectURL(props.prev)}
                                className={classes.preview}
                                src={props.prev || "https://via.placeholder.com/250"}
                             alt="gcc"/>
                        )
                    }
                </Paper>
            </>
        </>
    );
}

export default ImageDrag;
