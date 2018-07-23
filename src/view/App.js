import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { green200 }  from '@material-ui/core/colors/purple';
import Main from '../components/template/Main';


injectTapEventPlugin();

const theme = createMuiTheme({
  palette: {
    primary: green200,
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {

  render(){

    return(
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>  
    );
  };
};

export default App;