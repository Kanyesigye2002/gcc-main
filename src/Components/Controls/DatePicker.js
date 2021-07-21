import React from 'react'
// import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import {MobileDateTimePicker} from "@material-ui/lab";
import {Stack} from "@material-ui/core";


export default function DatePicker(props) {

    const {name, label, onChange} = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <MobileDateTimePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
                <DateTimePicker
                    inputVariant="outlined"
                    label={label}
                    name={name}
                    value={value}
                    fullWidth
                    onChange={date => onChange(convertToDefEventPara(name, date))}
                    renderInput={(props) => <TextField {...props} />}
                />
            </LocalizationProvider>
            {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
            {/*    <KeyboardDatePicker*/}
            {/*        disableToolbar*/}
            {/*        variant="inline"*/}
            {/*        inputVariant="outlined"*/}
            {/*        label={label}*/}
            {/*        format="MM/dd/yyyy"*/}
            {/*        name={name}*/}
            {/*        value={value}*/}
            {/*        fullWidth*/}
            {/*        onChange={date => onChange(convertToDefEventPara(name, date))}*/}
            {/*    />*/}
            {/*</MuiPickersUtilsProvider>*/}
        </>
    )
}
