import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Box, Hidden, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/styles"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import image1 from '../../Assets/Images/pastor001.jpg'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import {ExpandMore} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import red from "@material-ui/core/colors/red";
import clsx from "clsx";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


function AboutUs(props) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Paper>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item><Typography variant="h4">ABOUT US</Typography></Grid>
                    <Grid item xs={12}><Divider/></Grid>
                    <Grid item>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5">Background</Typography>
                                    <Typography variant="subtitle2">Glorious Church Of Christ ministries Bunamwaya
                                        Located
                                        200M from Bunamwaya-Ngobe Road, P.O.Box 259 Nateete-Kampala-Uganda started as a
                                        cell
                                        group of mutundwe Christian fellowship under miracle Centre church
                                        Mutundwe-kabaawo
                                        Zone, Kampala, Uganda and developed into church under the home of Mr. Lule,
                                        Kisigula
                                        Road. Since then it has gone through different stages and rental places with
                                        semi
                                        structure until To-date where it owns a home with permanent structure for school
                                        of
                                        ministry and semi permanent tent for the church.</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5">Church Vision</Typography>
                                    <Typography variant="subtitle2">A Glorious church that is blameless without spot or
                                        wrinkle</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5">Church Mission</Typography>
                                    <Typography variant="subtitle2">To win souls and disciple them in
                                        Christ</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5">{new Date().getFullYear()} Theme</Typography>
                                    <Typography variant="subtitle2">Be diligent to present yourself approved to God, a
                                        worker who does not need to be ashamed, rightly dividing the word of the truth
                                        (2
                                        Tim 2:15)</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Hidden mdDown>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}><Divider/></Grid>
                                <Grid item xs={12} container justifyContent="center" alignItems="flex-start" spacing={2}>
                                    <Grid item xs={12} container justifyContent="center">
                                        <Grid item xs={12} container justifyContent="center">
                                            <Typography variant="h5">
                                                Pr.Isaac Kituuka
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                About Pastor Isaac Kituuka
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={4} container justifyContent="center" alignItems="center">
                                        <img src={image1} alt="Pastor" style={{maxWidth: "-webkit-fill-available"}}/>
                                    </Grid>
                                    <Grid item xs={12} sm={8} container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">He is the founder and Team Leader-Pastor of
                                                Glorious
                                                Church Of
                                                Christ Ministries Bunamwaya. He was born on 20th-04-1967 he is married
                                                to Mrs Prossy
                                                Kituuka
                                                and the Lord has blessed them with Mwesigwa Timothy, Tandeka Samuel,
                                                Mulungi Jordan,
                                                and
                                                Kituuka Isaac (JR).</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                He got born again in 1990 at Makekere University Kampala
                                                (Muk),
                                                as he was finishing his first year at the university he had spent most
                                                of his time
                                                out of
                                                lectures looking for money and spending it loosely, they told him with
                                                God all
                                                things are
                                                possible he feared to expelled from the University and tried Jesus.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                Having been Born in a very remote place, poor family,
                                                grew up
                                                with the single father, when he joined the University, he had to look
                                                for money to
                                                keep up
                                                with the university standards, hence missing most lectures, Exams were
                                                very hard for
                                                him and
                                                amidst that confusion and fear he heard the Gospel and gave his life to
                                                Jesus who
                                                faithfully
                                                lead him through the university Successfully.
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5">
                                                Pastor’s Word
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">
                                                G.C.C honours and respect the body of Christ, we work
                                                with other ministries churches and organisations that
                                                advance the body of christ activities and submit to the
                                                Lordship of Jesus Christ in Uganda and beyond.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}><Divider/></Grid>
                                <Grid item xs={12} container justifyContent="center" alignItems="flex-start" spacing={2}>
                                    <Grid item xs={12} container direction="column" justifyContent="center">
                                        <Grid item xs={12} container justifyContent="center">
                                            <Typography variant="h5">
                                                Leadership
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                Pastor Isaac and Prossy Kituuka
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={8} container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                He is the founder and Team Leader-Pastor of Glorious Church Of Christ
                                                Ministries
                                                Bunamwaya. He was born on 20th-04-1967 he is married to Mrs Prossy
                                                Kituuka and the Lord has blessed them with Mwesigwa Timothy, Tandeka
                                                Samuel, Mulungi
                                                Jordan, and
                                                Kituuka Issac (JR).
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                He stayed with his mother and all his life till he finished
                                                school.
                                                He
                                                is from a humble family and valued God as No.1, then discipline
                                                and
                                                hard
                                                work. They used to have a family alter at 8PM everyday which she
                                                still
                                                does. It was an extended family with a few of her relatives and
                                                children.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                He was born again on 8th October 2006 after having challenges in
                                                marriage thats when Jesus met me with my wife and we both gave
                                                our lives
                                                to Christ in one day under the witness of Pastor Isaac Kituka we
                                                both
                                                went through discipleship classes.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5">
                                                Message
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                The body of Christ needs to acknowledge leadership, allow the
                                                holly
                                                spirit to guide us and to embark on activities that build the
                                                kingdom
                                                Mat 6:33. Proper and humble leadership still a challenge to the
                                                body of
                                                Christ.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={4} container justifyContent="center" alignItems="center">
                                        <img src={image1} alt="Pastor" style={{maxWidth: "-webkit-fill-available"}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12}>
                        <Hidden mdDown={false}>
                            <Grid item xs={12}><Divider/></Grid>
                            <Grid item container direction="row" justifyContent="space-evenly">
                                <Grid item xs={12} sm={12} container justifyContent="center">
                                    <Box p={2}>
                                        <Card style={{maxWidth: 900, width: "100%"}}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe">I</Avatar>
                                                    }
                                                    title="Pr.Isaac"
                                                    subheader="About Pr.Isaac"
                                                />
                                                <CardMedia component="img" alt="Contemplative Reptile" height="240"
                                                    // style={{maxWidth: 500}}
                                                           image={image1} title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        He is the founder and Team Leader-Pastor of Glorious
                                                        Church Of
                                                        Christ Ministries Bunamwaya. He was born on 20th-04-1967 he is
                                                        married to Mrs Prossy
                                                        Kituuka
                                                        and the Lord has blessed them with Mwesigwa Timothy, Tandeka
                                                        Samuel, Mulungi Jordan,
                                                        and
                                                        Kituuka Issac (JR).
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions disableSpacing>
                                                <Typography>Read more</Typography>
                                                <IconButton
                                                    className={clsx(classes.expand, {
                                                        [classes.expandOpen]: expanded,
                                                    })}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMore/>
                                                </IconButton>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid item>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="p">
                                                                He got born again in 1990 at Makekere University Kampala
                                                                (Muk),
                                                                as he was finishing his first year at the university he
                                                                had spent most of his time
                                                                out of
                                                                lectures looking for money and spending it loosely, they
                                                                told him with God all
                                                                things are
                                                                possible he feared to expelled from the University and
                                                                tried Jesus.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="p">
                                                                Having been Born in a very remote place, poor family,
                                                                grew up
                                                                with the single father, when he joined the University,
                                                                he had to look for money to
                                                                keep up
                                                                with the university standards, hence missing most
                                                                lectures, Exams were very hard for
                                                                him and
                                                                amidst that confusion and fear he heard the Gospel and
                                                                gave his life to Jesus who
                                                                faithfully
                                                                lead him through the university Successfully.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">
                                                                Pastor’s Word
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="subtitle1">
                                                                G.C.C honours and respect the body of Christ, we work
                                                                with other ministries churches and organisations that
                                                                advance the body of christ activities and submit to the
                                                                Lordship of Jesus Christ in Uganda and beyond.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}><Divider/></Grid>
                            <Grid item container direction="row" justifyContent="space-evenly">
                                <Grid item xs={12} sm={12} container justifyContent="center">
                                    <Box p={2}>
                                        <Card style={{maxWidth: 900, width: "100%"}}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe">S</Avatar>
                                                    }
                                                    title="Leadership"
                                                    subheader="Pastor Isaac and Prossy Kituuka"
                                                />
                                                <CardMedia component="img" alt="Contemplative Reptile" height="240"
                                                    // style={{maxWidth: 500}}
                                                           image={image1} title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        TMr. Pastor Isaac and Prossy Kituuka is a Director of support Functions at
                                                        G.C.C
                                                        He was born on 29th May 1974 is married to Namata Pauline and
                                                        God has
                                                        blessed them with Ssesanga Benon, Ssemambo Jonathan, Nassozi
                                                        Prudence
                                                        and Ssegujja Jonathan. He is the Son to Mr/Mrs Ssegujja
                                                        Christopher and
                                                        Nakankya Gladys of Kayinja Bugerere, he is the third born to his
                                                        father
                                                        and mother.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions disableSpacing>
                                                <Typography>Read more</Typography>
                                                <IconButton
                                                    className={clsx(classes.expand, {
                                                        [classes.expandOpen]: expanded,
                                                    })}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMore/>
                                                </IconButton>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid item>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="p">
                                                                He stayed with his mother and all his life till he
                                                                finished
                                                                school.
                                                                He
                                                                is from a humble family and valued God as No.1, then
                                                                discipline
                                                                and
                                                                hard
                                                                work. They used to have a family alter at 8PM everyday
                                                                which she
                                                                still
                                                                does. It was an extended family with a few of her
                                                                relatives and
                                                                children.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="body2" color="textSecondary"
                                                                        component="p">
                                                                He was born again on 8th October 2006 after having
                                                                challenges in
                                                                marriage thats when Jesus met me with my wife and we
                                                                both gave
                                                                our lives
                                                                to Christ in one day under the witness of Pastor Isaac
                                                                Kituka we
                                                                both
                                                                went through discipleship classes.
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">
                                                                Message
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="subtitle1">
                                                                The body of Christ needs to acknowledge leadership,
                                                                allow the
                                                                holly
                                                                spirit to guide us and to embark on activities that
                                                                build the
                                                                kingdom
                                                                Mat 6:33. Proper and humble leadership still a challenge
                                                                to the
                                                                body of
                                                                Christ.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default AboutUs;