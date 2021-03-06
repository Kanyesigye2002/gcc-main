import React, {useState} from 'react';
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/styles";
import {AccountCircle, Lock, LockOutlined} from '@material-ui/icons'
import {
    Paper,
    Avatar,
    Typography,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Divider
} from '@material-ui/core';
import {userLogin} from "../Redux/AdminReducers/api/authenticationService";
import {authenticate, authFailure, authSuccess} from "../Redux/AdminReducers/authActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Alert from '@material-ui/core/Alert';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {
        overflow: "hidden",
        height: "100vh"
    },
    loginPaper: {
        maxWidth: 400
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

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
        console.log("Loading again", loading);
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const user = localStorage.getItem("USER_KEY")

    React.useEffect(() => {
        if (user!==null) {
            localStorage.clear();
            props.history.push('/admin');
        }
    }, [])

    const classes = useStyles()

    return (
        <>
            <Backdrop className={classes.backdrop} open={!!loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Grid container justifyContent="center" alignItems="center" className={classes.root}>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <Paper className={classes.loginPaper} style={{padding: "50px 10px"}}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item container justifyContent="center">
                                <Avatar>
                                    <LockOutlined/>
                                </Avatar>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Typography component="h1" variant="h5">
                                    Glorious Church Ug
                                </Typography>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Typography component="p" variant="subtitle1">
                                    Administrators only
                                </Typography>
                            </Grid>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={6}>
                                <Grid item container spacing={2} alignItems="flex-end">
                                    <Grid item>
                                        <AccountCircle/>
                                    </Grid>
                                    <Grid item md={true} sm={true} xs={true}>
                                        <TextField id="username" type="text" value={values.userName}
                                                   onChange={handleChange}
                                                   name="userName" fullWidth autoFocus required/>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2} alignItems="flex-end">
                                    <Grid item>
                                        <Lock/>
                                    </Grid>
                                    <Grid item md={true} sm={true} xs={true}>
                                        <TextField id="password" type="password" className="form-control" minLength={8}
                                                   value={values.password} onChange={handleChange} name="password"
                                                   fullWidth
                                                   required/>
                                    </Grid>
                                </Grid>
                                <Grid item container alignItems="center" justifyContent="space-between">
                                    <Grid item container justifyContent="center">
                                        <Divider orientation="horizontal" flexItem color="primary"
                                                 style={{height: "1px", width: "100%"}}/>
                                    </Grid>
                                    <Grid item>
                                        <FormControlLabel control={
                                            <Checkbox
                                                color="primary"
                                            />
                                        } label="Remember me"/>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{textTransform: "none"}} variant="text" color="primary">Forgot
                                            password ?</Button>
                                    </Grid>
                                    <Grid item container justifyContent="center">
                                        <Button type="submit" variant="outlined" size="large" color="primary"
                                                style={{textTransform: "none"}}>
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item container justifyContent="center">
                                        {error &&
                                        <><Alert severity="error">{error}</Alert></>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );

}

const mapStateToProps = ({auth}) => {
    console.log("state ", auth)
    return {
        loading: auth.loading,
        error: auth.error
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        authenticate: () => dispatch(authenticate()),
        setUser: (data) => dispatch(authSuccess(data)),
        loginFailure: (message) => dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);