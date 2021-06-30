import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import { YouTube} from "@material-ui/icons"
import {useDispatch, useSelector} from "react-redux";


import {NextService, Carousels, Iframe, Swipes} from '../../Components'
import {fetchData} from '../../Redux/Actions'
import Paper from "@material-ui/core/Paper";

function Home(props) {

    const dispatch = useDispatch()

    const homed = useSelector(state => state.homeData)

    const imagesArray = [ homed.image1, homed.image2, homed.image3 ]

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <Paper>
            <Carousels images={imagesArray}/>
            <Grid container justify="center">
                <NextService date={homed.nextService}/>
            </Grid>
            <Grid container justify="center" style={{padding: "20px 0 10px"}}>
                <button className="btn-height" style={{width: 300}} ><YouTube size="1.5em"/> Latest Video</button>
            </Grid>
            <Iframe/>
            <Swipes/>
        </Paper>
    );
}

export default Home;
