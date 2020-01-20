import React from "react";
import "../static/styles/styles.css"
//Material UI Imports
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {Create, People, SpeakerNotes, TrendingUp} from "@material-ui/icons";
import Container from "@material-ui/core/Container";


export default class About extends React.Component {
  render() {
    return (
      <Paper id="about" className="about-paper" elevation={5} variant="outlined" square>
        <div className="about-container">
          <Typography className="about-title" component="h4" variant="h4" align="center" color="inherit">
            Designed For Doctors
          </Typography>
          <Container maxWidth="md" className="title-description">We've built our team with the promise of service,
            passion, and reliability at the forefront. An HRM invisibly
            assists in the exam room, or the office to lift the administration burden from doctors and office
            staff.
          </Container>
        </div>
        <div className="about-div">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Create color="primary" fontSize="large"/>
              <Typography variant="h6">Summary</Typography>
              <Typography className="about-description">HRMs review individual patients’ medical records spanning the last
                five years and provide a
                concise, detailed clinical summary</Typography>
            </Grid>
            <Grid item xs={3}>
              <SpeakerNotes style={{color: '#ff9800'}} fontSize="large"/>
              <Typography variant="h6">Notes</Typography>
              <Typography className="about-description">HRMs write your notes so you don’t have to.</Typography>
            </Grid>
            <Grid item xs={3}>
              <People color="secondary" fontSize="large"/>
              <Typography variant="h6">Patient Coordination</Typography>
              <Typography className="about-description">HRMs coordinate care for your patients to improve compliance and
                reduce attrition</Typography>
            </Grid>
            <Grid item xs={3}>
              <TrendingUp style={{color: '#f48fb1'}} fontSize="large"/>
              <Typography variant="h6">Patient Coordination</Typography>
              <Typography className="about-description">HRMs coordinate care for your patients to improve compliance and
                reduce attrition</Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    );
  }
}
