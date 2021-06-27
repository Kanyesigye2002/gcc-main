import React, {useState} from 'react'
import {MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function TimePick(props) {

    const {name, label, value, onChange} = props

    const [dates, setDate] = useState(new Date())

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TimePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                openTo="hours"
                views={["hours", "minutes"]}
                format="HH:mm"
                label={label}
                name={name}
                value={dates}
                fullWidth
                onChange={setDate}
                // onChange={date => onChange(convertToDefEventPara(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}
