import React from 'react';

import {LocationOn, Mood, Call, Mail} from "@material-ui/icons";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import {Controls} from "../../Components";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        padding: 3,
        // backgroundColor: "#000000de",
        // color: "#fff"
    },
    media: {
        height: 300,
    },
    buttonRoot: {
        overflow: "hidden",
        height: 250
    }
});

function ContactUs(props) {

    const classes = useStyles();

    const [data, setData] = React.useState({});

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Grid container direction="row" style={{padding: "0 10px"}}>
            <Grid spacing={4} item xs={12} md={8} style={{marginBottom: "30px"}}>
                <h2 style={{marginBottom: "1rem", textAlign: "center"}}>Contact Us</h2>
                <p style={{marginBottom: "70px", textAlign: "center"}}>We are here to help you out <Mood/></p>
                <Grid container style={{border: "1px solid burlywood", borderRadius: "5px"}}>
                    <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                        <Grid spacing={5} container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <Controls.Input name="host" label="Subject" value={data.host} onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input name="title" label="First Name" value={data.title} onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input name="title" label="Last Name" value={data.title} onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Controls.Input name="title" label="Email" value={data.title} onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Controls.Input name="description" label="Message Content" value={data.description}
                                                onChange={onChange} type="text" multiline rows={6}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Controls.Button type="submit">Send Email</Controls.Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid spacing={4} item xs={12} md={4} style={{ marginBottom: "30px"}}>
                <Card className={classes.root} style={{height: "100%"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} container justify="space-between" alignItems="center">
                            <iframe title="Church Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.776094264171!2d32.54391671475331!3d0.2636038998076775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd4f3d32d995%3A0x444bed85639cbda8!2sGLORIOUS%20CHURCH%20OF%20CHRIST!5e0!3m2!1sen!2sug!4v1624952809594!5m2!1sen!2sug"
                                    frameBorder="0"
                                    style={{
                                        border: "0",
                                        width: "100%",
                                        height: "400px",
                                        borderRadius: "10px",
                                        marginTop: "3.3rem"
                                    }}
                                    allowFullScreen=""/>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item container justify="space-between" alignItems="center">
                                <Typography variant="subtitle1">Location: </Typography>
                                <LocationOn/>
                            </Grid>
                            <Typography variant="subtitle2">Bunamwaya Located 200M from Bunamwaya-Ngobe
                                Road</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item container justify="space-between" alignItems="center">
                                <Typography variant="subtitle1" className="">Email Us: </Typography>
                                <Mail/>
                            </Grid>
                            <Typography variant="subtitle2">gloriouschurch@gcc.com</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item container justify="space-between" alignItems="center">
                                <Typography variant="subtitle1" className="">Call Us: </Typography>
                                <Call/>
                            </Grid>
                            <Typography variant="subtitle2">Tel +256-782 325564</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ContactUs;
