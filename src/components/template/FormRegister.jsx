import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SelectComponent from './Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: ""
    });
    this.sendName = this.sendName.bind(this);
    this.toSend = this.toSend.bind(this);
    this.props.toProgress();
  }
  sendName(e) {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  toSend(e) {
    this.props.createToWelcome(this.state.username);
    this.props.toProgress();
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
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <Button
              onClick={this.toSend}
              className="btNext"
            >
              NEXT
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
          </Grid>
        </Grid>
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
  state = {
    age: '',
    open: false,
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  onReturnWelcome(e) {
    this.props.returnToHome(e);
  }
  toSend(e) {
    this.props.welcomeToOkay(e);
    this.props.toProgress();
  }
  render() {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          Nice to meet you, <span className="boldFont">{this.props.username}</span>
        </Typography>
        <TextField
          id="NameofSheltherRescue"
          label="Name of Shelther/Rescue"
          name="NameofSheltherRescue"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <form autoComplete="off">
              <FormControl className="selectPagetwo">
                <InputLabel htmlFor="demo-controlled-open-select">What pronoun do you prefer?</InputLabel>
                <Select
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.age}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'demo-controlled-open-selects',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Option A</MenuItem>
                  <MenuItem value={20}>Option B</MenuItem>
                  <MenuItem value={30}>Option C</MenuItem>
                </Select>
              </FormControl>
            </form>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="501c3ein"
              label="501(c)3 (EIN)"
              name="501c3ein"
              placeholder=""
              className="textFieldHalf"
              margin="normal"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Button onClick={this.toSend} className="btNext" >
              NEXT
         </Button>
          </Grid>
          <Grid item md={6} xs={12} className="gridReturnLink">
            <Button color="primary" className="buttonPrevious" onClick={this.onReturnWelcome} >
              Return to the previous step
         </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
class Okay extends Component {
  constructor(props) {
    super(props);
    this.onReturnOkay = this.onReturnOkay.bind(this);
    this.toSend = this.toSend.bind(this);
  }
  onReturnOkay(e) {
    this.props.returnToCreate(e);
  }
  toSend(ev) {
    this.props.okayToSafety(ev);
    this.props.toProgress();
  }
  render() {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <span className="boldFont">Okay!</span>
        </Typography>
        <Typography gutterBottom>
          Now, connect your Shelter with the world!
   </Typography>
        <TextField
          id="briefDescription"
          label="Brief description (120 characters)"
          name="briefDescription"
          placeholder=""
          multiline
          className="textField"
          margin="normal"
        />
        <Typography gutterBottom variant="title" align="left">
          <p className="subTitle">Social media</p>
        </Typography>
        <TextField
          id="facebook"
          label="Facebook (Optional)"
          name="facebook"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <TextField
          id="twitter"
          label="Twitter (Optional)"
          name="twitter"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <TextField
          id="instagram"
          label="Instagram (Optional)"
          name="instagram"
          placeholder=""
          className="textField"
          margin="normal"
        />
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <Button onClick={this.toSend} className="btNext" >
              NEXT
         </Button>
          </Grid>
          <Grid item md={6} xs={12} className="gridReturnLink">
            <Button color="primary" className="buttonPrevious" onClick={this.onReturnOkay} >
              Return to the previous step
         </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
class Safety extends Component {
  state = {
    password: '',
    repassword: '',
    showPassword: false,
  };
  constructor(props) {
    super(props);
    this.onReturnSafety = this.onReturnSafety.bind(this);
  }
  onReturnSafety(e) {
    this.props.returnToOkay(e);
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleChangeRePassword = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  handleMouseDownRePassword = event => {
    event.preventDefault();
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowRePassword = () => {
    this.setState(state => ({ showRePassword: !state.showRePassword }));
  };
  render() {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <span className="boldFont">Safety first!</span>
        </Typography>
        <Typography gutterBottom>
          It’s time to set your password must be at least 8 characters long, with at least one capital letter.
        </Typography>
        <TextField
          id="email"
          label="E-mail"
          name="email"
          placeholder=""
          className="textField textFieldEmail"
          margin="normal"
        />
        <Grid container spacing={24}>
          <Grid item md={6} xs={12}>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              className="textField"
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ?
                      <VisibilityOff />
                      :
                      <Visibility />
                    }
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel htmlFor="adornment-password">Confirme Password</InputLabel>
            <Input
              className="textField"
              id="adornment-repassword"
              type={this.state.showRePassword ? 'text' : 'password'}
              value={this.state.repassword}
              onChange={this.handleChangeRePassword('repassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowRePassword}
                    onMouseDown={this.handleMouseDownRePassword}
                  >
                    {this.state.showRePassword ?
                      <VisibilityOff />
                      :
                      <Visibility />
                    }
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="I agree to Adopets. Terms of Use and Privacy Policy"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Button onClick={this.toSend} className="btNext" >
              CONFIRM E-MAIL
         </Button>
          </Grid>
          <Grid item md={6} xs={12}>
          </Grid>
        </Grid>
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
    this.okayToSafety = this.okayToSafety.bind(this);
    this.returnToCreate = this.returnToCreate.bind(this);
    this.returnToOkay = this.returnToOkay.bind(this);
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
  okayToSafety(ev) {
    this.setState((prevState) => ({
      showOkay: "hideDiv",
      showSafety: "showDiv"
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
  returnToOkay(e) {
    this.setState((prevState) => ({
      showWelcome: "hideDiv",
      showCreate: "hideDiv",
      showOkay: "showDiv",
      showSafety: "hideDiv",
    }));
  }
  render() {
    return (
      <div>
        <div className={this.state.showCreate}>
          <Create createToWelcome={this.createToWelcome} toProgress={this.props.toProgress} cards={this.state.cardA}/>
        </div>
        <div className={this.state.showWelcome}>
          <Welcome username={this.state.username} returnToHome={this.returnToHome} welcomeToOkay={this.welcomeToOkay} toProgress={this.props.toProgress} cards={this.state.cardA}/>
        </div>
        <div className={this.state.showOkay}>
          <Okay returnToCreate={this.returnToCreate} okayToSafety={this.okayToSafety}  toProgress={this.props.toProgress}  cards={this.state.cardB}/>
        </div>
        <div className={this.state.showSafety}>
          <Safety returnToOkay={this.returnToOkay}  cards={this.state.cardA}/>
        </div>
        <br />
      </div>
    );
  }
}
export default FormRegister;