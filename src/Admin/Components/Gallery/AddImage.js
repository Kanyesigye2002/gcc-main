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
import ImageGridList from "./ImageGridList";
import {Url} from "../../../Redux/Url";
import {fetchUserData, getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";
import {FetchImages} from "../../../Redux/MiddleWare";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";


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
    const [loading, setLoading] = useState(false);

    const onDrops = (acceptedFiles) => {
        setLoading(false)
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

    React.useEffect(() => {
        fetchUserData().then((response) => {
            console.log("Logged in")
        }).catch((e) => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    const uploadFile = (files) => {

        // const newFiles = files;
        // setLoading(true)

        try {
            files.map(async (file, index) => {
                try {
                    S3FileUpload
                        .uploadFile(files[0].file, config)
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

                            // let array = [...previews]; // make a separate copy of the array
                            // if (index !== -1) {
                            //     array.splice(index, 1);
                            //     setPreviews(array);
                            // }

                            // files.remove

                            dispatch(FetchImages())

                        })
                        .catch(err => console.error(err))
                } catch (err) {
                    console.log("Try1", err.message);
                }
            })
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
            {
            <>
                <Backdrop className={classes.backdrop} open={previews.length > 0 && loading ? true : false}>
                    <Typography variant="h4">Uploading {previews.length} images</Typography>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </>
            }
            <Grid container className={classes.root}>
                <Grid spacing={5} container direction="row" justify="center" alignItems="center"
                      style={{padding: "0 0px"}}>
                    <Grid item xs={12} container alignItems="center" justify="center">

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
                                {
                                    console.log(imageCategories)
                                }
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
                                        onClick={() => uploadFile(previews)}
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
                        <div>
                            <div>
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
                                                                previews.map((newImage, index) => {
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
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    );
}

export default AddImage;
