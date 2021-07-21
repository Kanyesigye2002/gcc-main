import React from 'react';
import SimpleReactLightbox, {SRLWrapper} from "simple-react-lightbox";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import './styles.css'

function ImageGridList() {

    const fetchedImages = useSelector(state => state.Images)

    return (
        <>
            <SimpleReactLightbox>
                <div>
                    <SRLWrapper>
                        {
                            fetchedImages.map((images, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            images.images.length > 1 && (
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
