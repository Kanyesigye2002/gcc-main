import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import {createStyles, Dialog, DialogContent, DialogTitle, Grid, Typography, TextField, MenuItem} from '@material-ui/core'
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Close, AddAPhotoOutlined, Add, Remove} from "@material-ui/icons";

import ImageDrag from "./ImageDrag";
import {Controls} from "../../../Components";
import ImageGridList from "./ImageGridList";
import {Url} from "../../../Redux/Url";


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "contents",
        padding: "0"
    },
    gridList: {
        height: "100%"
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overFlow: 'hidden',
        backGroundColor: theme.palette.background.paper,
    },
    dropZoneContainer: {
        minHeight: 200,
        background: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa",
    },
    dialogWrapper: {
        padding: "40px 0",
        position: 'absolute',
        minWidth: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center"
    },
    dialogTitle: {
        padding: '0px',
        maxWidth: "98%"
    },
    noPadding: {
        padding: "0",
        maxWidth: "90%"
    }
}));

function AddImage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selected, setSelected] = React.useState("Church");
    const [openPopup, setOpenPopup] = useState(false)
    const [previews, setPreviews] = useState([]);

    const images = useSelector(state => state.Images)

    const onDrops = (acceptedFiles) => {
        const pre = [];
        console.log(acceptedFiles)
        acceptedFiles.map((image, index) => {
            const previewUrl = URL.createObjectURL(image);
            console.log()
            pre.push({
                file: image, img: previewUrl
            })
        })
        const pres = [
            ...pre,
            ...previews,
        ]
        setPreviews(pres)
        setOpenPopup(true);

        console.log(pres)
    };

    const uploadFile = (files) => {
        try {
            let newImages = images
            files.map(async (file, index) => {
                console.log(file)
                try {
                    const formData = new FormData();
                    formData.append("file", file.file);
                    console.log("files got ", file.file);
                    const API_URL = Url + "/files";

                    const response = await axios.put(API_URL, formData, {
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            console.log(percentCompleted)
                        },
                    });

                    const data = response.data.fileDownloadUri
                    console.log("File: ", data)

                    const imageDat = {
                        "galleryCategory": {
                            name: selected,
                            images: [
                                {
                                    image: data,
                                    name: file.file.name,
                                    date: new Date()
                                }
                            ]
                        }
                    }

                    console.log("Image Data: ", imageDat)
                    const API_URL_Data = Url + "/api/gcc/v1/gallery/" + selected;

                    console.log(API_URL_Data)

                    const responseData = await axios.put(API_URL_Data, imageDat);
                    console.log(responseData)

                    console.log(images)




                    newImages.map(images => {
                        console.log(images)
                        if (images.name === selected) {
                            images.images.push(
                                {
                                    image: data,
                                    name: file.file.name,
                                    date: new Date()
                                }
                            )
                        }
                    })

                    console.log(newImages)


                } catch (err) {
                    alert("Try1", err.message);
                }
            })
            dispatch(
                {
                    type: "SetImages",
                    payload: newImages
                }
            )
        } catch (e) {
            alert("Try2", e.message);
        }

    };

    const {getRootProps, getInputProps} = useDropzone({multiple: true, onDrops});
    const {ref, ...rootProps} = getRootProps();

    const onChange = (event) => {
        setSelected(event.target.value)
    }

    const imageCategories = useSelector(state => state.ImageCategories)

    return (
        <>
            <Grid container zeroMinWidth className={classes.root}>
                <Grid spacing={5} container direction="row" justify="center" alignItems="center"
                      style={{padding: "0 0px"}}>
                    <Grid item xs={12} container alignItems="center" justify="center">

                            <div style={{flexGrow: "1", display: "flex", justifyContent: "center"}}>
                                <Typography variant="h4">Gallery</Typography>
                            </div>
                            <Controls.ActionButton color="primary" onClick={() => {setOpenPopup(true)}}>
                                <AddAPhotoOutlined/> Add Images
                            </Controls.ActionButton>

                    </Grid>
                </Grid>

                <Grid xm={12}>
                    <ImageGridList/>
                </Grid>

                <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
                    <DialogTitle className={classes.dialogTitle}>
                        <div style={{display: 'flex'}}>
                            <Typography variant="h6" component="div" style={{flexGrow: 1}}>Add Image</Typography>
                            <TextField id="" select label="Select" value={selected} onChange={onChange}
                                       helperText="Please select Category" variant="filled" style={{minWidth: "120px"}}>
                                {
                                    console.log(imageCategories)
                                }
                                {imageCategories.map((opt, index) => (
                                    <MenuItem key={index} value={opt}>{opt}</MenuItem>))}
                            </TextField>
                            <Controls.ActionButton style={{width: "30px", minWidth: "30px", height: "30px"}}
                                                   color="secondary" onClick={() => {
                                setOpenPopup(false)
                            }}><Close/></Controls.ActionButton>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <ImageDrag drop={onDrops} prev={previews}/>
                            <div>
                                <Controls.ActionButton style={{height: "30px", width: "100%"}} color="secondary"
                                                       onClick={() => uploadFile(previews)}
                                                       disabled={previews.length === 0 && true}><Add/> UpLoad All</Controls.ActionButton>
                                <Controls.ActionButton style={{height: "30px", width: "100%"}} color="secondary"
                                                       onClick={() => {
                                                           setPreviews([])
                                                       }}
                                                       disabled={previews.length === 0 && true}><Remove/> Remove
                                    All</Controls.ActionButton>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers className={classes.noPadding}>
                        <div>
                            <div>
                                <div className="gallery">
                                    {previews.map((image, index) => (
                                        <div key={index} style={{padding: "3px"}}>
                                            <div className="pic">
                                                <img src={image.img} alt={image.title}/>
                                                <div className="over">
                                                    <Controls.ActionButton style={{height: "30px"}} color="secondary"
                                                                           onClick={() => {
                                                                               const newPreviews = []
                                                                               previews.map((newImage, index) => {
                                                                                   if (newImage !== image) {
                                                                                       newPreviews.push(newImage)
                                                                                   }
                                                                               })
                                                                               setPreviews(newPreviews)
                                                                           }}>
                                                        <Remove/>
                                                    </Controls.ActionButton>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    );
}

export default AddImage;
