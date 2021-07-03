import React, {useState} from 'react';
import {
    Paper,
    withStyles,
    Avatar,
    Typography,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Divider
} from '@material-ui/core';
import {Face, Fingerprint, LockOutlined} from '@material-ui/icons'
import {userLogin} from "../api/authenticationService";
import {Form} from "../../Components/Forms/useForm";
import {authenticate, authFailure, authSuccess} from "../redux/authActions";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        height: "100vh"
    }
});

const Login = ({loading, error, ...props}) => {

    const [values, setValues] = useState({
        userName: '',
        password: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.authenticate();

        console.log("subMit", values)

        userLogin(values).then((response) => {

            if (response.status === 200) {
                props.setUser(response.data);
                props.history.push('/admin');
            } else {
                props.loginFailure('Something Wrong!Please Try Again');
            }

        }).catch((err) => {
            if (err && err.response) {
                switch (err.response.status) {
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication Failed.Bad Credentials");
                        break;
                    default:
                        props.loginFailure('Something Wrong!Please Try Again');

                }

            } else {
                props.loginFailure('Something Wrong!Please Try Again');
            }


        });
        console.log("Loading again",loading);
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ", loading);


    const classes = useStyles()

    return (
        <Grid container justify="center" alignItems="center" className={classes.root} >
            <Grid item xs={12} md={6} lg={5}>
                <Paper className={classes.padding}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item container justify="center">
                            <Avatar className={classes.avatar}>
                                <LockOutlined/>
                            </Avatar>
                        </Grid>
                        <Grid item container justify="center">
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Grid>
                    </Grid>
                    <form  onSubmit={handleSubmit} >
                        <div className={classes.margin}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Face/>
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="username" type="text" value={values.userName} onChange={handleChange} name="userName"  fullWidth autoFocus required/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Fingerprint/>
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" fullWidth required/>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" justify="space-between">
                                <Grid item>
                                    <FormControlLabel control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    } label="Remember me"/>
                                </Grid>
                                <Grid item>
                                    <Button style={{textTransform: "none"}} variant="text" color="primary">Forgot password ?</Button>
                                </Grid>
                            </Grid>
                            <Divider orientation="horizontal" flexItem
                                     style={{height: "2px", backgroundColor: "#202020A2"}}/>
                            <Grid container justify="center" style={{marginTop: '10px'}}>
                                <Button type="submit"  variant="outlined" color="primary" style={{textTransform: "none"}}>Login</Button>
                            </Grid>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );

}


const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
    }}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);