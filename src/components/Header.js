import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import {Parallax} from "react-parallax";

import "../static/styles/styles.css";
import backgroundImage from "../static/images/background.svg";

export default function Header() {
  return (
    <div style={{paddingTop: '4em'}}>
      <Parallax
        bgImage={backgroundImage}
        strength={400}
      >
        <div style={{height: '45em'}}>
          <Container maxWidth="sm" color="default" component="main" className="header-container">
            <Typography style={{fontWeight: '300'}} variant="h2" align="center" color="inherit" gutterBottom>
              Your virtual health relationship manager is here
            </Typography>
            <Typography style={{fontWeight: '500'}} variant="h5" align="center" color="inherit" component="p">
              Our reliable Health Relationship Managers (HRMs) help providers document comprehensive notes in real-time
              and
              coordinate patient activities between clinicians, departments and healthcare organizations. All in one.
            </Typography>
          </Container>
        </div>
      </Parallax>

    </div>
  );
}
