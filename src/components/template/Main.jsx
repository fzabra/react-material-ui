import React, { Component } from 'react';
import FormRegister from './FormRegister';
import Header from './Header';
import Card from './CardStart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

class Main extends Component {

  state = {
    completed: 0,
    buffer: 0,
  };


  progress = () => {
    this.setState({
        completed: this.state.completed + 25,
    })
  };  
  
    render() {
        const { completed, buffer } = this.state;
        return (
            <div>
                <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
                <div className="content">
                <Typography variant="display2" gutterBottom>
                    <div className="close">X</div>
                </Typography>
                
                <Grid container spacing={24}>
                    <Grid item md={6} xs={12}>
                        <Header />
                        <FormRegister toProgress={this.progress.bind(this)}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card />
                    </Grid>
                </Grid>  
                </div>                
            </div>
        );
    }
}

export default Main;