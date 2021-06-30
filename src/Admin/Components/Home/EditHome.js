import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid, TextField} from "@material-ui/core";
import ImageDrag from "./ImageDrag";
import {Controls} from "../../../Components";
import {UploadHome} from "../../../Redux/MiddleWare";

const useStyles = makeStyles((theme) => ({
    text_field: {
        width: '100%'
    }
}));
function EditHome(props) {

    const [dates, setDate] = useState(new Date())

    const datas = useSelector(state => state.homeData)

    const [data, setData] = useState(datas)

    const classes = useStyles();
    const [file1, setFile1] = React.useState();
    const [file2, setFile2] = React.useState();
    const [file3, setFile3] = React.useState();
    const [preview1, setPreview1] = React.useState();
    const [preview2, setPreview2] = React.useState();
    const [preview3, setPreview3] = React.useState();

    const dispatch = useDispatch();

    const onDrop = (acceptedFiles, setPreview, setFile) => {
        const fileDropped = acceptedFiles[0];
        setFile(fileDropped);
        const previewUrl = URL.createObjectURL(fileDropped);
        setPreview(previewUrl);
    };

    const onChange = (event) => {
        setData(
            {
                ...datas,
                nextService: dates,
                [event.target.name]: event.target.value
            }
        )
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const files = [file1, file2, file3]
        dispatch(UploadHome(files, data))
        console.log(data)
    }

    return (
        <>
            {console.log("home Data : ",datas)}
            <div style={{margin: "10px"}}>
                <form className={classes.root} onSubmit={onSubmit}>
                    <Grid spacing={5} container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <Grid item xs={12} sm={12}>
                                <ImageDrag drop={onDrop} prev={preview1} prevSet={setPreview1} setFiles={setFile1} image={data.image1}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid item xs={12} sm={12}>
                                <ImageDrag drop={onDrop} prev={preview2} prevSet={setPreview2} setFiles={setFile2} image={data.image2}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid item xs={12} sm={12}>
                                <ImageDrag drop={onDrop} prev={preview3} prevSet={setPreview3} setFiles={setFile3} image={data.image3}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Controls.DateAndTime name="nextService" label="Event Date" value={data.nextService} onChange={onChange}/>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField label="Latest Video" type="text" name="latestVideo" value={data.latestVideo} onChange={onChange} variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={12} container justify="center" alignItems="center">
                            <Controls.Button type="submit">Update Home</Controls.Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </>
    );
}

export default EditHome;
