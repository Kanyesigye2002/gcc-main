import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";

import {Event, EventPage} from "../../Components";
import '../../Assets/CSS/Components/Overlay/Overlay.css'
import {Typography} from "@material-ui/core";

const Events = () => {

    const [scroll, setScroll] = useState(<></>)

    const eventsn = useSelector(state => state.Events)

    /* Open when someone clicks on the span element */
    const openNav = (event) => {
        console.log(event)
        setScroll(<EventPage event={event} onClose={closeNav}/>)
        document.getElementById("myNav").style.width = "100%";
        document.body.classList.toggle("noScroll");

    }

    /* Close when someone clicks on the "x" symbol  inside the overlay */
    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
        document.body.classList.toggle("noScroll");
    }

    return (
        <Grid container>

            <Grid id="myNav" className="overlay">
                {scroll}
            </Grid>

            <Grid container justify="center">
                <Typography variant="h4">UpComing Events</Typography>
            </Grid>

            <Grid container direction="row">
                {eventsn.map((event, index) =>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Event key={index} event={event} view={openNav}/>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );


}

export default Events;
