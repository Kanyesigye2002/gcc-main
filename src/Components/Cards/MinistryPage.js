import React from 'react';
import Grid from "@material-ui/core/Grid";


function EventPage(props) {


    return (
        <Grid container direction="row">
            <div className="scrol">
                <div className="overlay-content">
                    <Grid spacing={2} container direction="row" style={{padding: "0 10px"}}>
                        <img src={props.content.image} alt="Glorious Church" style={{width: "100%", borderRadius: 2}}/>
                    </Grid>
                    <div style={{paddingTop: "3rem"}}>
                        {
                            props.content.content.div.map(div => (
                                <div>
                                    <h3>{div.title}</h3>
                                    <ul>
                                        {
                                            div.points.map(point => (
                                                <li><p style={{fontSize: "0.875em"}}>{point}</p></li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Grid>


    );
}

export default EventPage;
