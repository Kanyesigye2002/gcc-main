import React from 'react';
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";

const Carousels = (props) => {

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
                        <div key={index} style={{height: "90vh", overlay: "hidden", transition: "all 5s"}}>
                            <img src={item} style={{width: "100%"}} alt="Glorious Church"/>
                        </div>
                    ))
                }
            </Carousel>

        </Paper>
    );
}

export default Carousels;