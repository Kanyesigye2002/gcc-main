import React from 'react';

import {FaLocationArrow, FaSmile} from "react-icons/fa";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import {Controls} from "../../Components";

const useStyles = makeStyles({
    root: {
        padding: 3,
        backgroundColor: "#000000de",
        color: "#fff"
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
        console.log(event)
    }

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Grid container direction="row">
            <Grid spacing={4} item xs={12} md={4}>
                <Card className={classes.root}>
                    <Grid container justify="space-between" alignItems="center">
                        <span className="">Location: </span>
                        <span className="badge rounded-pill"><FaLocationArrow/></span>
                    </Grid>
                    <Grid container justify="space-between" alignItems="center">
                        <p>Glorious Church Of Christ ministries Bunamwaya Located 200M from Bunamwaya-Ngobe
                            Road</p>
                    </Grid>
                    <Grid container justify="space-between" alignItems="center">
                        <span className="">Email Us: </span>
                        <span className="badge rounded-pill"><FaLocationArrow/></span>
                    </Grid>
                    <p>gloriouschurch@gcc.com</p>
                    <Grid container justify="space-between" alignItems="center">
                        <span className="">Call Us: </span>
                        <span className="badge rounded-pill"><FaLocationArrow/></span>
                    </Grid>
                    <p>Tel +256-782 325564</p>
                    <Grid container justify="space-between" alignItems="center">
                        <iframe title="Church Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                frameBorder="0"
                                style={{border: "0", width: "100%", height: "400px", borderRadius: "10px", paddingTop: "3rem"}}
                                allowFullScreen=""/>
                    </Grid>

                </Card>
            </Grid>
            <Grid spacing={4} item xs={12} md={8}>
                <h2 style={{marginBottom: "1rem", textAlign: "center"}}>Contact Us</h2>
                <p style={{marginBottom: "70px", textAlign: "center"}}>We are here to help you out <FaSmile/></p>
                <Grid container>
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
                                <Controls.Input name="description" label="Email Content" value={data.description} onChange={onChange} type="text" multiline rows={6}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Controls.Button type="submit">Send Email</Controls.Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            </Grid>
    );
}

export default ContactUs;
