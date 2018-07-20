import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import './css/App.css';

injectTapEventPlugin();

class App extends Component {

  render(){

    return(
      <MuiThemeProvider>
        <div className="content">
        <Typography variant="subheading" gutterBottom>
          Create one Account
        </Typography>
        <Typography variant="headline" gutterBottom>
          Nice to meet you
        </Typography>
        <Typography gutterBottom noWrap>
          {`
            Welcome to Adopets! Let’s get organization registered with tha app.
          `}
        </Typography>
        <Typography variant="caption" gutterBottom align="left">
          Use this form to register a new shelter or rescue. If you want join an existing shelter or rescue account, please contact the Master Acount for that organization.
        </Typography>
          <TextField
            id="with-placeholder"
            label="First Name"
            placeholder=""
            margin="normal"
          />
          <TextField
            id="with-placeholder"
            label="Last Name"
            placeholder=""
            margin="normal"
          />
          <TextField
            id="with-placeholder"
            label="What pronoun do you prefer?"
            placeholder=""
            margin="normal"
          />
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          
        </div>
      </MuiThemeProvider>  
    );
  };
};




ReactDOM.render(<App />, document.getElementById('root'));