import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {YouTube} from "@material-ui/icons"
import {useDispatch, useSelector} from "react-redux";


import {NextService, Carousels, Iframe, Swipes} from '../../Components'
import {fetchData} from '../../Redux/Actions'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Reveal, Zoom} from "react-reveal";

function Home(props) {

    const dispatch = useDispatch()

    const home = useSelector(state => state.homeData)

    const images = [ home.image1, home.image2, home.image3 ]

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <Paper
            // style={{backgroundColor: "#00000000"}}
        >
            {/*<Carousels images={images}/>*/}
            <Carousels/>
            <Grid container justifyContent="center">
                <NextService date={home}/>
            </Grid>
            <Grid container justifyContent="center" style={{padding: "20px 0 10px"}}>
                <Button
                    startIcon={<YouTube color="primary" size="1.5em"/>}
                    style={{width: 300}}
                    variant="contained"
                    className="btn-height"
                >
                    Latest Video
                </Button>
            </Grid>
            <Iframe data={home}/>
            <Swipes/>
            <Zoom>
                <h1>React Reveal</h1>
            </Zoom>
        </Paper>
    );
}

export default Home;
