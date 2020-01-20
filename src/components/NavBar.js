import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from "@material-ui/core/Link";
import logo from "../static/images/logo.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(2, 2.5),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{position: 'fixed'}} color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link href="/"><img src={logo} height={'50'} alt="logo"/></Link>
          </IconButton>
          <nav style={{flexGrow: 1}}>
            <Link variant="button" color="inherit" href="/#about" className={classes.link}>
              ABOUT US
            </Link>
            <Link variant="button" color="inherit" href="/#team" className={classes.link}>
              LEADERSHIP
            </Link>
            <Link variant="button" color="inherit" href="/#contact" className={classes.link}>
              CONTACT
            </Link>
            <Link variant="button" color="inherit" href="/term" className={classes.link}>
              TERMS & CONDITIONS
            </Link>
          </nav>
          <Button href="#" color="secondary" variant="outlined" className={classes.link}>
            GET 24VITA
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
