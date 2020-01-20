import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {Container} from "@material-ui/core";
import Link from "@material-ui/core/Link";


export default function Footer() {
  return (
    <AppBar color="default" style={{top: "auto", bottom: 0, position: "inherit", textAlign: "center", padding: "1em 0"}}>
      <Container maxWidth="sm">
        <div>Copyright © 24Vita LLC 2020.</div>
        <div>111 Monroe St #2C Brooklyn NY, 11216</div>
        <Link component="div">Terms and Conditions</Link>
      </Container>
    </AppBar>
  );

}
