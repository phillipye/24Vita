import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {HashLink as Link} from 'react-router-hash-link';
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
    textDecoration: "none",
    color: "inherit",
    fontWeight: "500"
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{position: 'fixed'}} color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Button href={"#"}><img src={logo} height={'50'} alt="logo"/></Button>
          </IconButton>
          <nav style={{flexGrow: 1}}>
            <Link variant="button" to="/#about" className={classes.link}>
              ABOUT US
            </Link>
            <Link variant="button" to="/#team" className={classes.link}>
              LEADERSHIP
            </Link>
            <Link variant="button" to="/contact" className={classes.link}>
              CONTACT
            </Link>
            <Link variant="button" to="/term" className={classes.link}>
              TERMS & CONDITIONS
            </Link>
          </nav>
          <Button href="/#/contact" color="secondary" variant="outlined">
            GET 24VITA
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
