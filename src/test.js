
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import  LoginPage from './Admin/Admin/pages/Login';
import { Dashboard } from './Admin/Admin/pages/dashboard/dashboard';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

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
//             <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
//                 <Grid item xs={12} md={6} lg={5}>
//                     <Paper className={classes.padding}>
//                         <Grid container justify="center" spacing={2}>
//                             <Grid item container justify="center">
//                                 <Avatar className={classes.avatar}>
//                                     <LockOutlined/>
//                                 </Avatar>
//                             </Grid>
//                             <Grid item container justify="center">
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
//                             <Grid container alignItems="center" justify="space-between">
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
//                             <Grid container justify="center" style={{ marginTop: '10px' }}>
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