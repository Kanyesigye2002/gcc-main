import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {Grid, Button, Typography} from "@material-ui/core";

import ImageDrag from "../DragUpload/ImageDrag";
import ImageDragG from "./ImageDrag";
import {Controls} from "../../../Components";
import {UploadFile} from "../../../Redux/MiddleWare";
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";
import {Remove} from "@material-ui/icons";
import S3FileUpload from "react-s3";
import {config} from "../../Config";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import EventSwiper from "../../../Components/Swipers/EventSwiper";
import {isFuture} from "date-fns";

function AddEvent(props) {

    const [file, setFile] = React.useState();
    const [data, setData] = React.useState(props.event);
    const [preview, setPreview] = React.useState(props.event.fileName);
    const [errors, setErrors] = useState({});

    const [images, setImages] = useState([]);

    const [status, setStatus] = useState(true)
    const [previews, setPreviews] = useState([]);
    const [opens, setOpen] = useState(false)
    const [message, setMessage] = useState("Loading ....")

    const onDrops = (acceptedFiles) => {
        const pre = [];
        acceptedFiles.map((image) => {
            const previewUrl = URL.createObjectURL(image);
            pre.push({
                file: image, img: previewUrl
            })
        })
        const pres = [
            ...pre,
            ...previews,
        ]
        setPreviews(pres)
    };

    const dispatch = useDispatch();

    useEffect(() => {
        checkStatus()
    }, [])

    const checkStatus = () => {
        if (data.date !== undefined) {
            setStatus(isFuture(new Date(data.date)))
        }
    }

    // const validate = (fieldValues = data) => {
    //     let temp = { ...errors }
    //     if ('fullName' in fieldValues)
    //         temp.fullName = fieldValues.fullName ? "" : "This field is required."
    //     if ('email' in fieldValues)
    //         temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    //     if ('mobile' in fieldValues)
    //         temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    //     if ('departmentId' in fieldValues)
    //         temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    //     setErrors({
    //         ...temp
    //     })
    //
    //     if (fieldValues === data)
    //         return Object.values(temp).every(x => x === "")
    // }

    const onDrop = (acceptedFiles) => {
        const fileDropped = acceptedFiles[0];
        setFile(fileDropped);
        const previewUrl = URL.createObjectURL(fileDropped);
        setPreview(previewUrl);
    };

    const onChange = (event) => {
        checkStatus()
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const uploadFile = (file, index) => {
        setMessage(`Uploading ${index} / ${previews.length}`)
        setOpen(true)
        try {
            S3FileUpload
                .uploadFile(file.file, config)
                .then(response => {
                    const dataI = response.location

                    const newImages = [
                        ...images,
                        {
                            image: dataI,
                            name: file.file.name,
                            date: new Date()
                        }
                    ]

                    setImages(newImages)

                    if (previews.length === index) {
                        setOpen(false)
                        setData({...data, "images": images})
                        dispatch(UploadFile(file, data))
                        setData({})
                    } else {
                        uploadFile(previews[index], index + 1)
                        setData({...data, "images": images})
                        dispatch(UploadFile(file, data))
                    }
                })
                .catch(err => {
                    console.error(err)
                    setOpen(false)
                })
        } catch (err) {
            setOpen(false)
            console.log("Try1", err.message);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Submitting: ", data, file)
        if(previews.length > 0) {
            uploadFile(previews[0], 1)
        } else {
            dispatch(UploadFile(file, data))
            setData({})
        }
    }

    React.useEffect(() => {
        fetchUserData().then(() => {
        }).catch(() => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (
        <>
            <div style={{width: "100%"}}>
                <form onSubmit={onSubmit} noValidate autoComplete="off">
                    <Grid spacing={5} container direction="row" justifyContent="center" alignItems="center">

                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="host" label="Host Name" value={data.host} onChange={onChange}
                                            error={errors.host}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="title" label="Event Title" value={data.title} onChange={onChange}
                                            error={errors.title}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.DateAndTime name="date" label="Event Date" value={data.date} onChange={onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <ImageDrag drop={onDrop} prev={preview}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Controls.Input name="description" label="Event description" value={data.description}
                                            onChange={onChange} error={errors.description} type="text" multiline
                                            rows={6}/>
                        </Grid>
                        {!status ? <>
                            <Grid item xs={12}>
                                <ImageDragG drop={onDrops} prev={previews}/>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="gallery">
                                    {previews.map((image, index) => (
                                        <div key={index} style={{padding: "3px"}}>
                                            <div className="pic">
                                                <img src={image.img} alt={image.title}/>
                                                <div className="over">

                                                    <Button variant="outlined" style={{height: "30px"}}
                                                            color="secondary"
                                                            onClick={() => {
                                                                const newPreviews = []
                                                                previews.map((newImage) => {
                                                                    if (newImage !== image) {
                                                                        newPreviews.push(newImage)
                                                                    }
                                                                })
                                                                setPreviews(newPreviews)
                                                            }}>
                                                        <Remove/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Grid>
                            <Grid item xs={12} container justifyContent="center">
                                <EventSwiper Images={data.images}/>
                            </Grid>
                        </> : <></>}
                        <Grid item xs={12}>
                            <Button type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                <Backdrop open={opens} style={{zIndex: "1400"}}>
                    <Typography variant="h2">{message}</Typography>
                    <br/>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </>
    );
}

export default AddEvent;
