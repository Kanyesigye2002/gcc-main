import React, {useState} from 'react';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DateAndTimes(props) {

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const {name, label, value, onChange} = props

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    inputVariant="outlined"
                    label={label}
                    name={name}
                    value={value}
                    fullWidth
                    onChange={date => onChange(convertToDefEventPara(name, date))}
                />
            </MuiPickersUtilsProvider>

        </>
    );
}

export default DateAndTimes;
