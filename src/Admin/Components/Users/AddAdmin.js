import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import {Controls} from "../../../Components";
import ImageDrag from "./ImageDrag";
import {FetchUsers, UploadUser} from "../../../Redux/MiddleWare";
import {useDispatch} from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function AddAdmin(props) {
    const dispatch = useDispatch();

    const [data, setData] = React.useState(props.data);
    const [preview, setPreview] = React.useState();
    const [file, setFile] = React.useState();
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onDrop = (acceptedFiles) => {
        const fileDropped = acceptedFiles[0];
        setFile(fileDropped);
        const previewUrl = URL.createObjectURL(fileDropped);
        setPreview(previewUrl);
    };

    const onChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(data, file)
        dispatch(UploadUser(file, data))
        setData({})
        dispatch(FetchUsers())
    }

    const [role, setRole] = useState('USER')

    const roles = [
        {value: 'USER', label: 'Team'},
        {value: 'ADMIN', label: 'Admin'},
        {value: 'ROOTADMIN', label: 'Root Admin'}
    ]

    const change = (event) => {
        setRole(event.target.value)
        setData({
            ...data,
            "roles": event.target.value
        })
    }

    // const roles = [
    //     { title: 'ADMIN', year: 1994 },
    //     { title: 'MASTERADMIN', year: 1994 },
    //     ]

    return (
        <>
            <div style={{width: "100%"}}>
                {console.log("Data: ", data)}
                <form onSubmit={onSubmit} noValidate autoComplete="off">
                    <Grid spacing={5} container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} container justify="center">
                            <ImageDrag drop={onDrop} prev={preview}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="firstName" label="First Name" value={data.firstName}
                                            onChange={onChange} error={errors.firstName}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="secondName" label="Second Name" value={data.secondName}
                                            onChange={onChange} error={errors.secondName}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="title" label="Title" value={data.title}
                                            onChange={onChange} error={errors.title}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controls.Input type="numbers" name="phoneNumber" label="Phone Contact" value={data.phoneNumber}
                                            onChange={onChange} error={errors.phoneNumber}/>
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField fullWidth label="Currency" type="text" name="currency" variant="filled"*/}
                        {/*               select value={role} onChange={change}*/}
                        {/*               SelectProps={{native: true}}>*/}
                        {/*        {roles.map((option) => (*/}
                        {/*            <option key={option.value} value={option.value}>*/}
                        {/*                {option.label}*/}
                        {/*            </option>*/}
                        {/*        ))*/}
                        {/*        }*/}
                        {/*    </TextField>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="userName" label="User Name" value={data.userName} onChange={onChange}
                                            error={errors.userName}/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="filled" aria-autocomplete="none">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    autoComplete="off"
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    variant="filled"
                                    onChange={onChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} container justify="center">
                            <Button type="submit" variant="outlined">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
}

export default AddAdmin;