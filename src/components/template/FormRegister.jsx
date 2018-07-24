import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SelectComponent from './Select';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: ""
    });
    this.sendName = this.sendName.bind(this);
    this.toSend = this.toSend.bind(this);
  }

  sendName(e) {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  toSend(e) {
    this.props.createToWelcome(this.state.username);
  }

  render() {
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
          value={this.state.username} onChange={this.sendName}
        />
        <TextField
          id="with-placeholder"
          label="Last Name"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <SelectComponent />
        <Button
          onClick={this.toSend}
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
    this.onReturnWelcome = this.onReturnWelcome.bind(this);
    this.toSend = this.toSend.bind(this);
  }

  onReturnWelcome(e) {
    this.props.returnToHome(e);
  }

  toSend(e) {
    this.props.welcomeToOkay(e);
  }

  render() {
    return (
      <div>
        <h1>Welcome ,{this.props.username}</h1>
        <input type="button" value="Return Home" onClick={this.onReturnWelcome} />
        <Button
          onClick={this.toSend}
          className="btNext"
        >
          NEXT
        </Button>
      </div>
    );
  }
}

class Okay extends Component {
  constructor(props) {
    super(props);
    this.onReturnOkay = this.onReturnOkay.bind(this);
  }

  onReturnOkay(e) {
    this.props.returnToCreate(e);
  }

  render() {
    return (
      <div>
        <h1>Okay ,{this.props.username}</h1>
        <input type="button" value="Logout" onClick={this.onReturnOkay} />
      </div>
    );
  }
}

class Safety extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    this.props.returnToHome(e);
  }

  render() {
    return (
      <div>
        <h1>Safety ,{this.props.username}</h1>
        <input type="button" value="Logout" onClick={this.onLogout} />
      </div>
    );
  }
}

class FormRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCreate: "showDiv",
      showWelcome: "hideDiv",
      showOkay: "hideDiv",
      showSafety: "hideDiv",
      username: ""
    }

    this.onHandleCreate = this.onHandleCreate.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);
    this.createToWelcome = this.createToWelcome.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
    this.welcomeToOkay = this.welcomeToOkay.bind(this);
    this.returnToCreate = this.returnToCreate.bind(this);
  }

  onHandleCreate(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv"
    }));
  }

  onHandleLogin(username) {
    this.setState((prevState) => ({
      username: username,
      showLogin: "hideDiv",
      showCreate: "hideDiv",
    }));
  }

  createToWelcome(username) {
    this.setState((prevState) => ({
      username: username,
      showCreate: "hideDiv",
      showWelcome: "showDiv"
    }));
  }

  welcomeToOkay(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv",
      showOkay: "showDiv"
    }));
  }

  returnToHome(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv",
      showCreate: "showDiv",
      username: ""
    }));
  }

  returnToCreate(e) {
    this.setState((prevState) => ({
      showWelcome: "showDiv",
      showCreate: "hideDiv",
      showOkay: "hideDiv",
    }));
  }

  render() {
    return (<div>
      <div className={this.state.showCreate}>
        <Create createToWelcome={this.createToWelcome} />
      </div>

      <div className={this.state.showWelcome}>
        <Welcome username={this.state.username} returnToHome={this.returnToHome} welcomeToOkay={this.welcomeToOkay}/>
      </div>

      <div className={this.state.showOkay}>
        <Okay username={this.state.username} returnToCreate={this.returnToCreate} />
      </div>

      <div className={this.state.showSafety}>
        <Safety username={this.state.username} returnToHome={this.returnToHome} />
      </div>
      <br />
    </div>);
  }
}

export default FormRegister;