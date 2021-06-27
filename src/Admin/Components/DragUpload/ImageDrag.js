import React from 'react';
import RootRef from "@material-ui/core/RootRef";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {useDropzone} from "react-dropzone";

const useStyles = makeStyles((theme) => ({
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
            <RootRef rootRef={ref}>
                <Paper {...rootProps} elevation={0} className={classes.dropzoneContainer}>
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
            </RootRef>
        </>
    );
}

export default ImageDrag;
