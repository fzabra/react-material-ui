import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'

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
});

class FormCreat extends React.Component { 
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
        
      </form>
    );
  }
}

FormCreat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormCreat);
