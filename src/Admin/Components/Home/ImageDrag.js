import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {useDropzone} from "react-dropzone";


const useStyles = makeStyles(() => ({
    dropzoneContainer: {
        minHeight: 100,
        background: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa",
    }
}));

function ImageDrag(props) {

    const classes = useStyles();
    const onDrop = (acceptedFiles) => {
        props.drop(acceptedFiles, props.prevSet, props.setFiles)
    };
    const {getRootProps, getInputProps} = useDropzone({multiple: false, onDrop});

    const {ref, ...rootProps} = getRootProps();

    return (
        <>
            <>
                <Paper ref={ref} {...rootProps} elevation={0} className={classes.dropzoneContainer}>
                    <input {...getInputProps()} />
                    <div className="pic">
                        {
                            props.prev === undefined && (
                                <div className="info">
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            )
                        }
                        <img onLoad={() => URL.revokeObjectURL(props.prev)} src={props.prev || props.image} alt="gcc"/>
                    </div>

                </Paper>
            </>
        </>
    );
}

export default ImageDrag;
