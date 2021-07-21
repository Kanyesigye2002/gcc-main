import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import S3FileUpload from 'react-s3';
import S3 from 'react-aws-s3';

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
import {makeStyles} from "@material-ui/styles";
import {Close, AddAPhotoOutlined, Add, Remove} from "@material-ui/icons";

import ImageDrag from "./ImageDrag";
import ImageGridList from "./ImageGridList";
import {Url} from "../../../Redux/Url";
import {fetchUserData, getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";
import {FetchImages} from "../../../Redux/MiddleWare";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { createTheme } from '@material-ui/core/styles';
import {config} from "../../Config";

const theme = createTheme();

const useStyles = makeStyles(() => createStyles({
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
        setOpenPopup(true);
    };

    React.useEffect(() => {
        fetchUserData().then(() => {
        }).catch(() => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    const uploadFile = (file, index) => {
        setMessage(`Uploading ${index} / ${previews.length}`)
        setOpen(true)
        try {

            S3FileUpload
                .uploadFile(file, config)
                .then(response => {
                    const data = response.location

                    const imageData = {
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

                    axios({
                        method: 'PUT',
                        url: `${Url}/api/gcc/admin/v1/gallery/${selected}`,
                        headers: {
                            'Authorization': 'Bearer ' + getToken()
                        },
                        'data': imageData
                    })

                    dispatch(FetchImages())

                    if (previews.length === index) {
                        setOpen(false)
                    } else {
                        uploadFile(previews[index], index + 1)
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

    // const uploadFiles = (files) => {
    //
    //     setMessage(`Uploading 0 / ${files.length}`)
    //
    //     try {
    //         files.map(async (file, index) => {
    //             setMessage(`Uploading ${index + 1} / ${files.length}`)
    //             try {
    //                 S3FileUpload
    //                     .uploadFile(file, config)
    //                     .then(response => {
    //                         const data = response.location
    //
    //                         const imageData = {
    //                             "galleryCategory": {
    //                                 name: selected,
    //                                 images: [
    //                                     {
    //                                         image: data,
    //                                         name: file.file.name,
    //                                         date: new Date()
    //                                     }
    //                                 ]
    //                             }
    //                         }
    //
    //                         axios({
    //                             method: 'PUT',
    //                             url: `${Url}/api/gcc/admin/v1/gallery/${selected}`,
    //                             headers: {
    //                                 'Authorization': 'Bearer ' + getToken()
    //                             },
    //                             'data': imageData
    //                         })
    //
    //                         dispatch(FetchImages())
    //
    //                         if (files.length === index + 1) {
    //                             setOpen(false)
    //                         }
    //
    //                     })
    //                     .catch(err => console.error(err))
    //             } catch (err) {
    //                 setOpen(false)
    //                 console.log("Try1", err.message);
    //             }
    //         })
    //     } catch (e) {
    //         setOpen(false)
    //         console.log("Try2", e.message);
    //     }
    //
    // };

    const onChange = (event) => {
        setSelected(event.target.value)
    }

    const imageCategories = useSelector(state => state.ImageCategories)

    return (
        <>
            <Grid container className={classes.root}>
                <Grid spacing={5} container direction="row" justifyContent="center" alignItems="center"
                      style={{padding: "0 0px"}}>
                    <Grid item xs={12} container alignItems="center" justifyContent="center">

                        <div style={{flexGrow: "1", display: "flex", justifyContent: "center"}}>
                            <Typography variant="h4">Gallery</Typography>
                        </div>
                        <Button variant="outlined" color="primary" onClick={() => {
                            setOpenPopup(true)
                        }}>
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
                                {imageCategories.map((opt, index) => (
                                    <MenuItem key={index} value={opt}>{opt}</MenuItem>))}
                            </TextField>
                            <Button variant="outlined" style={{width: "30px", minWidth: "30px", height: "30px"}}
                                    color="secondary" onClick={() => {
                                setOpenPopup(false)
                            }}><Close/></Button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <ImageDrag drop={onDrops} prev={previews}/>
                            <div>
                                <Button variant="outlined" style={{height: "30px", width: "100%"}} color="secondary"
                                        onClick={() => uploadFile(previews[0], 1)}
                                        disabled={previews.length === 0 && true}><Add/> UpLoad All
                                </Button>
                                <Button variant="outlined" style={{height: "30px", width: "100%"}} color="secondary"
                                        onClick={() => {
                                            setPreviews([])
                                        }}
                                        disabled={previews.length === 0 && true}><Remove/> Remove All
                                </Button>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers className={classes.noPadding}>
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
                    </DialogContent>
                </Dialog>
                <Backdrop open={opens} style={{zIndex: "1400"}}>
                    <Typography variant="h2">{message}</Typography>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </Grid>
        </>
    );
}

export default AddImage;
