import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import {Parallax} from "react-parallax";

import "../static/styles/styles.css";

export default function Header() {
  return (
    <div style={{paddingTop: '4em'}}>
      <Parallax
        blur={1}
        bgImage={"https://image.freepik.com/free-photo/adult-child-hands-holding-red-heart-aqua-background_49149-908.jpg"}
        strength={200}
      >
        <div style={{height: 600}}>
          <Container maxWidth="sm" color="default" component="main" className="header-container">
            <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
              Your virtual health relationship manager is here
            </Typography>
            <Typography variant="h5" align="center" color="inherit" component="p">
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
