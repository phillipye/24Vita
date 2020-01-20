import React from 'react';
import {CardActions, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "../static/styles/styles.css";
import Container from "@material-ui/core/Container";

export default class Team extends React.Component {
  team = [
    {
      name: "Ryan Bo",
      description: "Ryan is a first year family medicine physician. He is passionate about helping people find reliable and compassionate patient advocates who integrate well with their unique family dynamics and schedule."
    },
    {
      name: "Phillip Ye",
      description: "Phillip is fearlessly creative and habitually unconventional. As the son of immigrants, Phillip is passionate about improving the health of under-represented and immigrant patient population with compassion-driven innovation."
    },
    {
      name: "Mohit Shukla",
      description: "Mohit is a healthcare management engineer. He is wholly committed to the patients of 24Vita, and that commitment comes through in every managerial decision. He believes that strong and effective leadership is built on a foundation of mutual respect and trust."
    },
    {
      name: "Connie Liu",
      description: "Connie is an experienced software engineer, leading and working in teams on various projects using a wide range of technologies. She has proven experience with all software development life cycle and ability to quickly embrace and rapidly utilize new technologies."
    }
  ];

  render() {
    return (
      <Paper id="team" style={{padding: '1em auto', backgroundColor: "#333"}} className="team-paper" elevation={5}
             variant="outlined" square>
        <Typography className="about-title" component="h4" variant="h4" align="center" color="inherit">
          Meet The Team!
        </Typography>
        <Container maxWidth="md" className="title-description">We've built our team with the promise of service,
          passion, and reliability at the forefront. An HRM invisibly
          assists in the exam room, or the office to lift the administration burden from doctors and office
          staff.
        </Container>
        <div style={{margin: '2em auto 5em', width: '90%'}}>
          {/* End hero unit */}
          <Grid container spacing={3}>
            {this.team.map(member => (
              <Grid item key={member.name} md={3}>
                <Card style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <CardContent style={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h6" component="h6">
                      {member.name}
                    </Typography>
                    <span>
                      {member.description}
                    </span>
                  </CardContent>
                  <CardActions>
                    <LinkedInIcon color={"primary"} className="connect-icons"/>
                    <MailOutlineIcon color={"secondary"} className="connect-icons"/>
                  </CardActions>
                </Card>
              </Grid>
            ))
            }
          </Grid>
        </div>
      </Paper>
    );
  }
}
