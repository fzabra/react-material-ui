import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonNext from './componets/ButtonNext';
import FormCreate from './componets/FormCreate';
import Card from './componets/Card';
import { createMuiTheme } from '@material-ui/core/styles';
import { green200 }  from '@material-ui/core/colors/purple';

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
        <div className="content">
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <Typography variant="subheading" gutterBottom>
                Create one Account
              </Typography>
              <Typography variant="headline" gutterBottom>
                Nice to meet you
              </Typography>
              <Typography gutterBottom>
                
                  Welcome to Adopets! Let’s get organization registered with tha app.
                
              </Typography>
              <Typography variant="caption" gutterBottom align="left">
                Use this form to register a new shelter or rescue. If you want join an existing shelter or rescue account, please contact the Master Acount for that organization.
              </Typography>
              <FormCreate />
              <ButtonNext />
            </Grid>
            <Grid item md={6} xs={12}>
              <Card />
            </Grid>
          </Grid>                  
        </div>
      </MuiThemeProvider>  
    );
  };
};

export default App;