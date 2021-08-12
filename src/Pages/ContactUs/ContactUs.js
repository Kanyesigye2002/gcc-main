import React from 'react';

import {LocationOn, Mood, Call, Mail} from "@material-ui/icons";
import emailjs from 'emailjs-com';

import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import {Controls} from "../../Components";
import {Paper, Typography} from "@material-ui/core";
import axios from "axios";
import {Url} from "../../Redux/Url";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        padding: 3,
        // backgroundColor: "#000000de",
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

function ContactUs() {

    const classes = useStyles();

    const [data, setData] = React.useState({});
    const [names1, setName1] = React.useState("");
    const [names2, setName2] = React.useState("");

    const handleSubmit = () => {
        var templateParams = {
            firstname: names1,
            lastname: names2,
            email: data.email,
            phone: '0752331807',
            message: data.content,
            subject: data.subject
        };

        emailjs.send('service_uws5okh', 'template_4bjkal6', templateParams, 'user_m7Oz8FxqB6gERUlakinJK')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    };

    const onSubmit = (event) => {
        event.preventDefault()

        setData(
            {
                ...data,
                name: `${names1} ${names2}`
            }
        )

        console.log(data)

        setOpen(true);


    }

    const name1 = (event) => {
        setName1(event.target.value)
    }

    const name2 = (event) => {
        setName2(event.target.value)
    }

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {

        axios({
            "method": 'POST',
            "url": `${Url}/api/gcc/v1/message`,
            'data': data
        })

        handleSubmit();

        setOpen(false);
    };

    return (
        <>
            <Grid container direction="row" style={{padding: "0"}}>
                <Grid item xs={12} md={8} sm={{p: 2}}
                      container justifyContent="center"
                >
                    <Paper>
                        <h2 style={{marginBottom: "1rem", textAlign: "center"}}>Contact Us</h2>
                        <p style={{marginBottom: "70px", textAlign: "center"}}>We are here to help you out <Mood/></p>
                        <Grid container style={{border: "1px solid burlywood", borderRadius: "5px", width: "auto"}}
                              m={1}>
                            <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                                <Grid spacing={5} container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <Controls.Input type="text" name="subject" label="Subject" value={data.host}
                                                        onChange={onChange}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Controls.Input type="name" name="firstName" label="First Name" value={names1}
                                                        onChange={name1}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Controls.Input type="name" name="lastName" label="Last Name" value={names2}
                                                        onChange={name2}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controls.Input type="email" name="email" label="Email" value={data.email}
                                                        onChange={onChange}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controls.Input name="content" label="Message Content" value={data.content}
                                                        onChange={onChange} type="text" multiline rows={6}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Controls.Button type="submit">Send Email</Controls.Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={{p: 2}}
                      container justifyContent="center"
                >
                    <Card className={classes.root}
                        // style={{height: "100%"}}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} container justifyContent="space-between" alignItems="center">
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
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">Location: </Typography>
                                    <LocationOn/>
                                </Grid>
                                <Typography variant="subtitle2">Bunamwaya Located 200M from Bunamwaya-Ngobe
                                    Road</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" className="">Email Us: </Typography>
                                    <Mail/>
                                </Grid>
                                <Typography variant="subtitle2">gloriouswebsite@gmail.com</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" className="">Call Us: </Typography>
                                    <Call/>
                                </Grid>
                                <Typography variant="subtitle2">Tel +256-782 325564</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.subject} - {data.name}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {data.content}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Typography>
                        Email from {data.email}
                    </Typography>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Confirm Message
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ContactUs;
