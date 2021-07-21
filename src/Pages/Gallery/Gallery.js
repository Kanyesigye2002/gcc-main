import React from 'react';
import ImageGridList from "../../Components/Images/ImageGridList";
import Grid from "@material-ui/core/Grid";


function Gallery() {

    return (
        <Grid>
            <Grid container direction="row" className="row">
                <Grid item xs={12} container justifyContent="center">
                    <h2>Welcome To the Church Gallery</h2>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <ImageGridList/>
            </Grid>
        </Grid>
    );
}

export default Gallery;
