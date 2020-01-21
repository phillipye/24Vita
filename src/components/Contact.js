import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import logo from "../static/images/logo.png";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountCircle, ContactMail, Navigation} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default class Contact extends React.Component {
  render() {
    return (
      <Paper id='contact' elevation="3" square
             style={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'space-around',
               backgroundColor: '#757575',
               padding: '10em 0',
               height: '56vh'
             }}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
          <Typography className="about-title" component="h4" variant="h4" color="primary">
            Contact Us
          </Typography>
          <p color="secondary" style={{textAlign: 'left'}}>
            To learn more about 24Vita, contact us using the message box below
            <p style={{margin: 0}}>OR send us an email at <strong>support@24vita.io</strong></p></p>
          <p>You can expect a reply within 24 business hours.</p>
          <p>See for yourself how much time you can save.</p>

          <form id="contactform" action="//formspree.io/support@24vita.io" method="POST" noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  style={{width: '90%'}}
                  label="Enter Your Full Name"
                  margin="normal"
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle/>
                      </InputAdornment>
                    ),
                  }}/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  style={{width: '90%'}}
                  fullWidth={true}
                  label="Enter Your Email"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactMail/>
                      </InputAdornment>
                    ),
                  }}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Your Message"
                  name="message"
                  multiline
                  rows="4"
                  variant="filled"
                  fullWidth={true}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Button margin="normal" color="primary" variant={"outlined"} type="submit" value="Send"><Navigation/>Send
                  Message</Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <img src={logo} alt="logo"/>
        </div>
      </Paper>
    );
  }
}
