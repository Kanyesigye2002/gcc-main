import React from 'react';
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imageDiv: {
        // height: "70vh",
        overlay: "hidden",
        transition: "all 5s",
        minHeight: "max-content",
    },
}));

const Carousels = (props) => {
    const classes = useStyles()

    return (
        <Paper>
            <Carousel
                className="Example"
                autoPlay={true}
                animation={"slide"}
                indicators={true}
                timeout={500}
                cycleNavigation={true}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={false}
            >
                {
                    props.images.map((item, index) => (
                        <div key={index} className={classes.imageDiv}>
                            <>
                                <img src={item} style={{width: "100%"}} alt="Glorious Church"/>
                            </>
                        </div>
                    ))
                }
            </Carousel>

        </Paper>
    );
}

export default Carousels;