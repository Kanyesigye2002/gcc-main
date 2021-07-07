import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}




















// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
//
// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }
//
// const useStyles = makeStyles(() => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//     },
//     main: {
//         marginTop: theme.spacing(8),
//         marginBottom: theme.spacing(2),
//     },
//     footer: {
//         padding: theme.spacing(3, 2),
//         marginTop: 'auto',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
//     },
// }));
//
// export default function StickyFooter() {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <Container component="main" className={classes.main} maxWidth="sm">
//                 <Typography variant="h2" component="h1" gutterBottom>
//                     Sticky footer
//                 </Typography>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                     {'Pin a footer to the bottom of the viewport.'}
//                     {'The footer will move as the main element of the page grows.'}
//                 </Typography>
//                 <Typography variant="body1">Sticky footer placeholder.</Typography>
//             </Container>
//             <footer className={classes.footer}>
//                 <Container maxWidth="sm">
//                     <Typography variant="body1">My sticky footer can be found here.</Typography>
//                     <Copyright />
//                 </Container>
//             </footer>
//         </div>
//     );
// }








//
// import {
//     BrowserRouter,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import  LoginPage from './Admin/Admin/pages/Login';
// import { Dashboard } from './Admin/Admin/pages/dashboard/dashboard';
//
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/" component={LoginPage}/>
//                 <Route exact path="/dashboard" component={Dashboard}/>
//             </Switch>
//         </BrowserRouter>
//     );
// }
//
// export default App;




















// import React from 'react';
// import { Paper, withStyles, Avatar, Typography, Grid, TextField, Button, FormControlLabel, Checkbox, Divider } from '@material-ui/core';
// import { Face, Fingerprint, LockOutlined } from '@material-ui/icons'
// const styles = theme => ({
//     margin: {
//         margin: theme.spacing.unit * 2,
//     },
//     padding: {
//         padding: theme.spacing.unit
//     }
// });
//
// class LoginTab extends React.Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <Grid container justifyContent="center" alignItems="center" style={{height: "100vh"}}>
//                 <Grid item xs={12} md={6} lg={5}>
//                     <Paper className={classes.padding}>
//                         <Grid container justifyContent="center" spacing={2}>
//                             <Grid item container justifyContent="center">
//                                 <Avatar className={classes.avatar}>
//                                     <LockOutlined/>
//                                 </Avatar>
//                             </Grid>
//                             <Grid item container justifyContent="center">
//                                 <Typography component="h1" variant="h5">
//                                     Sign in
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                         <div className={classes.margin}>
//                             <Grid container spacing={8} alignItems="flex-end">
//                                 <Grid item>
//                                     <Face />
//                                 </Grid>
//                                 <Grid item md={true} sm={true} xs={true}>
//                                     <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
//                                 </Grid>
//                             </Grid>
//                             <Grid container spacing={8} alignItems="flex-end">
//                                 <Grid item>
//                                     <Fingerprint />
//                                 </Grid>
//                                 <Grid item md={true} sm={true} xs={true}>
//                                     <TextField id="username" label="Password" type="password" fullWidth required />
//                                 </Grid>
//                             </Grid>
//                             <Grid container alignItems="center" justifyContent="space-between">
//                                 <Grid item>
//                                     <FormControlLabel control={
//                                         <Checkbox
//                                             color="primary"
//                                         />
//                                     } label="Remember me" />
//                                 </Grid>
//                                 <Grid item>
//                                     <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
//                                 </Grid>
//                             </Grid>
//                             <Divider orientation="horizontal" flexItem style={{height: "2px", backgroundColor: "#202020A2"}} />
//                             <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
//                                 <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
//                             </Grid>
//                         </div>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         );
//     }
// }
//
// export default withStyles(styles)(LoginTab);