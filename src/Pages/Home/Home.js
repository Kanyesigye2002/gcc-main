import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {YouTube} from "@material-ui/icons"
import {useDispatch, useSelector} from "react-redux";


import {NextService, Carousels, Iframe, Swipes} from '../../Components'
import {fetchData} from '../../Redux/Actions'
import Button from "@material-ui/core/Button";

function Home() {

    const dispatch = useDispatch()

    const home = useSelector(state => state.homeData)

    const images = { image1: home.image1, image2: home.image2, image3: home.image3 }

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <>
            <Carousels images={images}  data={home}/>
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
        </>
    );
}

export default Home;
