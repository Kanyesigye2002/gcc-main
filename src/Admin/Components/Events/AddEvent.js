import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import ImageDrag from "../DragUpload/ImageDrag";
import {Controls} from "../../../Components";
import {UploadFile} from "../../../Redux/MiddleWare";
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";


const useStyles = makeStyles((theme) => ({
    text_field: {
        width: '100%'
    }
}));

function AddEvent(props) {
    const classes = useStyles();

    const [file, setFile] = React.useState();
    const [data, setData] = React.useState(props.event);
    const [preview, setPreview] = React.useState(props.event.fileName);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    // const validate = (fieldValues = data) => {
    //     let temp = { ...errors }
    //     if ('fullName' in fieldValues)
    //         temp.fullName = fieldValues.fullName ? "" : "This field is required."
    //     if ('email' in fieldValues)
    //         temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    //     if ('mobile' in fieldValues)
    //         temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    //     if ('departmentId' in fieldValues)
    //         temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    //     setErrors({
    //         ...temp
    //     })
    //
    //     if (fieldValues === data)
    //         return Object.values(temp).every(x => x === "")
    // }

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
        dispatch(UploadFile(file, data))
        setData({})
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            console.log("Logged in")
        }).catch((e) => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (
        <>
            <div style={{width: "100%"}}>
                <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                    <Grid spacing={5} container direction="row" justify="center" alignItems="center">

                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="host" label="Host Name" value={data.host} onChange={onChange} error={errors.host}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Controls.Input name="title" label="Event Title" value={data.title} onChange={onChange} error={errors.title}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Controls.DatePicker name="date" label="Event Date" value={data.date} onChange={onChange}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ImageDrag drop={onDrop} prev={preview}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Controls.Input name="description" label="Event description" value={data.description} onChange={onChange} error={errors.discription} type="text" multiline rows={6}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button type="submit">Submit</Button>
                        </Grid>

                    </Grid>
                </form>
            </div>
        </>
    );
}

export default AddEvent;
