import S3FileUpload from "react-s3";
import {config} from "../../Admin/Config";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";

export default function UploadImages(props) {

    const [opens, setOpen] = useState(true)
    const [message, setMessage] = useState("Loading ....")

    useEffect(() => {
        console.log("Am here")
        UploadImagesFun(props.files, setOpen, setMessage)
    }, [])
    return <>
        <Backdrop open={opens} style={{zIndex: "1400"}}>
            {console.log("wza", opens)}
            <Typography variant="h2">{message}</Typography>
            <CircularProgress color="inherit"/>
        </Backdrop>
    </>
}

export const UploadImagesFun = (files, setOpen, setMessage) => {

    const upLoaded = []

    setMessage(`Uploading ${upLoaded.length} / ${files.length}`)
    files.map(async (file, index) => {
        upLoaded.push(file)
        setMessage(`Uploading ${upLoaded.length} / ${files.length}`)
        if (file !== undefined) {
            console.log(file)
            console.log(file.file)
            S3FileUpload
                .uploadFile(file, config)
                .then(response => {
                    const data = response.location
                    upLoaded.push(data)
                    if (files.length === index + 1) {
                        console.log("Done ")
                    }
                })
                .catch(err => console.error(err));
        } else {

        }
    })
}
