import React from 'react';
import {useSelector} from "react-redux";
import ImageGridList from "../../Components/Images/ImageGridList";
import Grid from "@material-ui/core/Grid";


function Gallery(props) {

    const images = useSelector(state => state.Images)

    return (
        <Grid>
            <Grid container direction="row" className="row">
                <Grid xs={12} container justify="center">
                    <h2>Welcome To the Church Gallery</h2>
                </Grid>
            </Grid>
            <Grid container direction="row" className="row">
                <ImageGridList/>
            </Grid>
        </Grid>
    );
}

export default Gallery;
