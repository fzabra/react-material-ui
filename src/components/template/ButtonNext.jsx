import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
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
};

function ClassesNesting(props) {
  const { classes } = props;

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      NEXT
    </Button>
  );
}

ClassesNesting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassesNesting);
