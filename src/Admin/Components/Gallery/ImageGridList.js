import React, {useState} from 'react';
import SimpleReactLightbox, {SRLWrapper} from "simple-react-lightbox";
import {useDispatch, useSelector} from "react-redux";
import {IconButton, Typography} from "@material-ui/core";

import './styles.css'
import {Remove} from "@material-ui/icons";
import axios from "axios";
import {Url} from "../../../Redux/Url";
import {getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import {FetchImages} from "../../../Redux/MiddleWare";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';

function ImageGridList() {

    const fetchedImages = useSelector(state => state.Images)
    const dispatch = useDispatch();

    const [message, setMessage] = useState("This is a success message!")
    const [severity, setSeverity] = useState("success")

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <>
            <SimpleReactLightbox>
                <div>
                    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                            {message}
                        </Alert>
                    </Snackbar>
                    <SRLWrapper>
                        {
                            fetchedImages.map((images, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            images.images.length > 0 && (
                                                <>
                                                    <Typography variant="h6"
                                                                style={{marginTop: "30px"}}>{images.name}</Typography>
                                                    <div className="gallery">
                                                        {images.images.map((image, index) => (
                                                            <div key={index} style={{padding: "3px"}}>
                                                                <div className="pic">
                                                                    <a href={image.image}>
                                                                        <img src={image.image}
                                                                             alt="Glorious Church Uganda"/>
                                                                    </a>
                                                                    <div className="info"
                                                                         style={{
                                                                             height: "fit-content",
                                                                             width: "fit-content",
                                                                             top: 0,
                                                                             right: 0,
                                                                             left: "auto",
                                                                             bottom: "unset",
                                                                             background: "transparent",
                                                                         }}>
                                                                        <IconButton
                                                                            onClick={() => {
                                                                                axios({
                                                                                    method: 'Delete',
                                                                                    url: `${Url}/api/gcc/admin/v1/gallery/${image.id}`,
                                                                                    headers: {
                                                                                        'Authorization': 'Bearer ' + getToken()
                                                                                    },
                                                                                }).then(res => {
                                                                                    console.log(res)
                                                                                    setSeverity("success")
                                                                                    setMessage(res.data)
                                                                                    setOpen(true)
                                                                                    dispatch(FetchImages())
                                                                                })
                                                                            }}
                                                                        >
                                                                            <Remove/>
                                                                        </IconButton>
                                                                    </div>
                                                                    <div className="info"
                                                                         style={{
                                                                             maxHeight: "30%",
                                                                             bottom: 0,
                                                                             top: "unset"
                                                                         }}>
                                                                        <p style={{margin: 0}}>Glorious Church</p>
                                                                        <p style={{
                                                                            margin: 0,
                                                                            fontSize: "12px"
                                                                        }}>{images.name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}

                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </SRLWrapper>
                </div>
            </SimpleReactLightbox>
        </>
    );
}

export default ImageGridList;
