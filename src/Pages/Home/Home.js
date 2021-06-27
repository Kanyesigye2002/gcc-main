import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import { FaYoutube} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux";

import {NextService, Carousels, Iframe} from '../../Components'
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
            <Grid container justify="center" style={{padding: "0"}}>
                <button className="btn-height" style={{width: 300}} ><FaYoutube size="1.5em"/> Latest Video</button>
            </Grid>
            <Iframe/>
        </Paper>
    );
}

export default Home;
