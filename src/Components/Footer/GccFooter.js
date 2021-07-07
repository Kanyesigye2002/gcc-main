import React from 'react';
import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import {MenuItems} from '../MenuItems/MenuItems.js';
import logo from "../../Assets/Images/logos/logo-sm-b.png";
import Controls from '../Controls'
import Footer from "./Footer";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    linkBtn: {
        borderBottom: "1px solid black",
        borderRadius: "0",
    },
    footer: {
        // borderTop: "1px solid black"
    }
}))

function GccFooter(props) {
    const classes = useStyles()


    return (
        <Grid container  style={{marginTop: "20px", borderTop: "1px solid burlywood"}}>
            <Grid item container spacing={3} xs={12} sm={6} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={7} container alignContent="center" justifyContent="center">
                    <img alt="Glorious Church ug" src={logo} style={{maxHeight: 70}}/>
                </Grid>
                <Grid item xs={12} container alignContent="center" justifyContent="center">
                    <Typography>Welcome to Glorious Church</Typography>
                </Grid>
                <Grid item xs={12} container alignContent="center" justifyContent="center">
                        <iframe title="Church Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.776094264171!2d32.54391671475331!3d0.2636038998076775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd4f3d32d995%3A0x444bed85639cbda8!2sGLORIOUS%20CHURCH%20OF%20CHRIST!5e0!3m2!1sen!2sug!4v1624952809594!5m2!1sen!2sug"
                                frameBorder="0"
                                style={{
                                    border: "0",
                                    width: "100%",
                                    height: "200px",
                                    borderRadius: "2px"
                                }}
                                allowFullScreen=""/>
                </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={2}>

                {MenuItems.map((item, index) => (
                    <Grid item xs={6} key={index} style={{padding: "0 8px"}}>
                        <div style={{padding: "2px", width: "100%"}}>
                            <Link to={item.url}>
                                <Controls.Button color="secondary" style={{border: "1px solid rgba(154, 130, 98, 0.2)", borderBottom: "1px solid black",  borderRadius: "0"}} variant="outlined" fullWidth>{item.title}</Controls.Button>
                            </Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default React.memo(GccFooter);