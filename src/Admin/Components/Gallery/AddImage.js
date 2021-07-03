import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import S3FileUpload from 'react-s3';

import {
    createStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button
} from '@material-ui/core'
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

const config = {
    bucketName: 'gcc-api',
    dirName: 'images', /* optional */
    region: 'us-east-2',
    accessKeyId: 'AKIAUYJHZSXOSNCOMIA2',
    secretAccessKey: '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',
}



function AddImage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [selected, setSelected] = React.useState("Church");
    const [openPopup, setOpenPopup] = useState(false)
    const [previews, setPreviews] = useState([]);

    const images = useSelector(state => state.Images)

    const onDrops = (acceptedFiles) => {
        const pre = [];
        acceptedFiles.map((image, index) => {
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
        setOpenPopup(true);
    };

    const uploadFiled = async (files) => {
        try {
            const response = await S3FileUpload
                .uploadFile(files[0].file, config)
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.error(err))

            console.log(config)
            console.log("Response",response)
        } catch (e) {
            console.log(e)
        }
    }

    const uploadFile = (files) => {
        try {
            let newImages = images
            files.map(async (file, index) => {
                try {
                    S3FileUpload
                        .uploadFile(files[0].file, config)
                        .then(response =>  {
                            console.log(response)
                            const data = response.location
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

                            const API_URL_Data = Url + "/api/gcc/v1/gallery/" + selected;

                            console.log(API_URL_Data)

                            axios.put(API_URL_Data, imageDat);

                            newImages.map(images => {
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
                        })
                        .catch(err => console.error(err))
                } catch (err) {
                    console.log("Try1", err.message);
                }
            })
            dispatch(
                {
                    type: "SetImages",
                    payload: newImages
                }
            )
        } catch (e) {
            console.log("Try2", e.message);
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
            <Grid container className={classes.root}>
                <Grid spacing={5} container direction="row" justify="center" alignItems="center"
                      style={{padding: "0 0px"}}>
                    <Grid item xs={12} container alignItems="center" justify="center">

                            <div style={{flexGrow: "1", display: "flex", justifyContent: "center"}}>
                                <Typography variant="h4">Gallery</Typography>
                            </div>
                            <Button variant="outlined" color="primary" onClick={() => {setOpenPopup(true)}}>
                                <AddAPhotoOutlined/> Add Images
                            </Button>

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
                            <Button variant="outlined"  style={{width: "30px", minWidth: "30px", height: "30px"}}
                                                   color="secondary" onClick={() => {
                                setOpenPopup(false)
                            }}><Close/></Button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <ImageDrag drop={onDrops} prev={previews}/>
                            <div>
                                <Button variant="outlined"  style={{height: "30px", width: "100%"}} color="secondary"
                                                       onClick={() => uploadFile(previews)}
                                                       disabled={previews.length === 0 && true}><Add/> UpLoad All
                                </Button>
                                <Button variant="outlined"  style={{height: "30px", width: "100%"}} color="secondary"
                                                       onClick={() => {
                                                           setPreviews([])
                                                       }}
                                                       disabled={previews.length === 0 && true}><Remove/> Remove All
                                </Button>
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
                                                    <Button variant="outlined"  style={{height: "30px"}} color="secondary"
                                                                           onClick={() => {
                                                                               const newPreviews = []
                                                                               previews.map((newImage, index) => {if (newImage !== image) {newPreviews.push(newImage)}})
                                                                               setPreviews(newPreviews)
                                                                           }}>
                                                        <Remove/>
                                                    </Button>
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
