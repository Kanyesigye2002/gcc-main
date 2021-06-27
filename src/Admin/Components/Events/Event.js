import React from 'react';

import image from '../../../Assets/images/jpics/pastor2.jpeg'
import {CButton, CCardFooter} from "@coreui/react";
import CIcon from "@coreui/icons-react";

function Event(props) {
    return (
        <div className="card border-light mb-5 mx-auto" style={{maxWidth: "300px"}}>
            <div className="card-body">
                {console.log(props.event)}
                <h5 className="card-title pb-0 mb-0">{props.event.title}</h5>
                <p className="card-text small pt-0 mt-0 text-muted">Event Date by <span className="text-primary">{props.event.contributed}</span> on {props.event.date}</p>
                <p className="card-text small text-left">{props.event.message} <button onClick={props.clicked} className="link- text-black">... continue reading</button></p>
                <img src={image} className="card-img-top" alt="..."/>
                <CCardFooter>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber"/> Edit Event</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Delete Event</CButton>
                </CCardFooter>
            </div>
        </div>
    );
}

export default Event;
