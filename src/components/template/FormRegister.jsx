import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      username: ""
    });
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(e) {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onSubmit(e) {
    this.props.onSignupSubmit(this.state.username);
  }

  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Typography variant="headline" gutterBottom>
          Nice to meet you
            </Typography>
        <Typography gutterBottom>
          Welcome to Adopets! Let’s get organization registered with tha app.
            </Typography>
        <Typography variant="caption" gutterBottom align="left">
          Use this form to register a new shelter or rescue. If you want join an existing shelter or rescue account, please contact the Master Acount for that organization.
            </Typography>
        <TextField
          id="username"
          label="Name"
          name="username"
          placeholder=""
          className="textField"
          margin="normal"
          value={this.state.username} onChange={this.onHandleChange}
        />
        <TextField
          id="with-placeholder"
          label="Last Name"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <FormControl
          className="formControl"
        >
          <InputLabel >What pronoun do you prefer?</InputLabel>
          <Select>
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem>Option one</MenuItem>
            <MenuItem>Option two</MenuItem>
            <MenuItem>Option x</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={this.onSubmit}
          className="btNext"
        >
          NEXT
            </Button>
      </div>
    );
  }
}


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    this.props.onHandleLogout(e);
  }

  render() {
    return (
      <div>
        <h1>Welcome ,{this.props.username}</h1>
        <input type="button" value="Logout" onClick={this.onLogout} />
      </div>
    );
  }
}



class FormRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignup: "showDiv",
      showWelcome: "hideDiv",
      username: ""
    }

    this.onHandleSignup = this.onHandleSignup.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);


    this.onSignupSubmit = this.onSignupSubmit.bind(this);

    this.onHandleLogout = this.onHandleLogout.bind(this);
  }

  onHandleSignup(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv"
    }));
  }

  onHandleLogin(username) {
    this.setState((prevState) => ({
      username: username,
      showLogin: "hideDiv",
      showSignup: "hideDiv",
    }));
  }

  onSignupSubmit(username) {
    this.setState((prevState) => ({
      username: username,
      showSignup: "hideDiv",
      showWelcome: "showDiv"
    }));
  }

  onHandleLogout(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv",
      showSignup: "showDiv",
      username: ""
    }));
  }
  render() {
    return (<div>
      <div className={this.state.showSignup}>
        <SignUp onSignupSubmit={this.onSignupSubmit} />
      </div>

      <div className={this.state.showWelcome}>
        <Welcome username={this.state.username} onHandleLogout={this.onHandleLogout} />
      </div>
      <br />
    </div>);
  }
}

export default FormRegister;


























// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl'
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

// const styles = {
//   textField: {
//   //     marginLeft: theme.spacing.unit,
//   //     marginRight: theme.spacing.unit,
//       width: '90%',
//     },
//     formControl: {
//       //margin: theme.spacing.unit,
//       minWidth: "90%",
//     },
//     root: {
//       background: 'linear-gradient(45deg, #de6690 30%, #ce3f71 90%)',
//       borderRadius: 20,
//       border: 0,
//       color: 'white',
//       padding: '0 30px',
//       width: '95%',
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       marginTop: 30,
//     },
//     label: {
//       textTransform: 'capitalize',
//     }
// }

// class FormRegister extends React.Component { 
//     state = {
//         age: '',
//         open: false,
//       };

//       handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//       };

//       handleClose = () => {
//         this.setState({ open: false });
//       };

//       handleOpen = () => {
//         this.setState({ open: true });
//       };

//   render() {
//     const { classes } = this.props;

//     return (
//         <div>
//             <Typography variant="headline" gutterBottom>
//                 Nice to meet you
//             </Typography>
//             <Typography gutterBottom>

//                 Welcome to Adopets! Let’s get organization registered with tha app.

//             </Typography>
//             <Typography variant="caption" gutterBottom align="left">
//                 Use this form to register a new shelter or rescue. If you want join an existing shelter or rescue account, please contact the Master Acount for that organization.
//             </Typography>
//             <form className={classes.container} noValidate autoComplete="off">
//             <TextField
//                 id="with-placeholder"
//                 label="Name"
//                 placeholder=""
//                 className={classes.textField}
//                 margin="normal"
//                 />
//                 <TextField
//                 id="with-placeholder"
//                 label="Last Name"
//                 placeholder=""
//                 className={classes.textField}
//                 margin="normal"
//                 />
//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor="demo-controlled-open-select" >What pronoun do you prefer?</InputLabel>
//                     <Select
//                         open={this.state.open}
//                         onClose={this.handleClose}
//                         onOpen={this.handleOpen}
//                         value={this.state.age}
//                         onChange={this.handleChange}
//                         inputProps={{
//                         name: 'What pronoun do you prefer?',
//                         id: 'demo-controlled-open-select',
//                         }}
//                     >
//                     <MenuItem value="">
//                     <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={1}>Option one</MenuItem>
//                     <MenuItem value={2}>Option two</MenuItem>
//                     <MenuItem value={3}>Option x</MenuItem>
//                     </Select>
//                 </FormControl>
//                 <Button
//                 classes={{
//                     root: classes.root, // class name, e.g. `classes-nesting-root-x`
//                     label: classes.label, // class name, e.g. `classes-nesting-label-x`
//                 }}
//                 >
//                 NEXT
//                 </Button>    
//             </form>
//         </div>
//     );
//   }
// }

// FormRegister.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FormRegister);