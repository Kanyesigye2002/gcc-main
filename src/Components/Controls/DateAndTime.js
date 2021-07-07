import React, {useState} from 'react';
// import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import {MobileDateTimePicker} from "@material-ui/lab";
import {Stack} from "@material-ui/core";

function DateAndTimes(props) {


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    // const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

    const {name, label, value, onChange} = props

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <MobileDateTimePicker
                        inputVariant="outlined"
                        label={label}
                        name={name}
                        value={value}
                        fullWidth
                        onChange={date => onChange(convertToDefEventPara(name, date))}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
            {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
            {/*    <DateTimePicker*/}
            {/*        inputVariant="outlined"*/}
            {/*        label={label}*/}
            {/*        name={name}*/}
            {/*        value={value}*/}
            {/*        fullWidth*/}
            {/*        onChange={date => onChange(convertToDefEventPara(name, date))}*/}
            {/*    />*/}
            {/*</MuiPickersUtilsProvider>*/}

        </>
    );
}

export default DateAndTimes;
