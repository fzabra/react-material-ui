import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "90%",
  },
  root: {
    background: 'linear-gradient(45deg, #de6690 30%, #ce3f71 90%)',
    borderRadius: 20,
    border: 0,
    color: 'white',
    padding: '0 30px',
    width: '95%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: 30,
  },
  label: {
    textTransform: 'capitalize',
  },
});

class FormRegister extends React.Component { 
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

  render() {
    const { classes } = this.props;

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
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="with-placeholder"
                label="Name"
                placeholder=""
                className={classes.textField}
                margin="normal"
                />
                <TextField
                id="with-placeholder"
                label="Last Name"
                placeholder=""
                className={classes.textField}
                margin="normal"
                />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select" >What pronoun do you prefer?</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'What pronoun do you prefer?',
                        id: 'demo-controlled-open-select',
                        }}
                    >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Option one</MenuItem>
                    <MenuItem value={2}>Option two</MenuItem>
                    <MenuItem value={3}>Option x</MenuItem>
                    </Select>
                </FormControl>
                <Button
                classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}
                >
                NEXT
                </Button>    
            </form>
        </div>
    );
  }
}

FormRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormRegister);
