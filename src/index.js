import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createMuiTheme} from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
      contrastText: '#fff',
    },
    secondary: {
      light: '#80cbc4',
      main: '#80cbc4',
      dark: '#00897b',
      contrastText: '#000',
    },

    type: "dark"
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(<ThemeProvider theme={theme}><App/></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
