import React, { Component } from 'react';
import FormRegister from './FormRegister';
import Header from './Header';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

class Main extends Component {
    render() {
        return (
            <div className="content">
            <Grid container spacing={24}>
                <Grid item md={6} xs={12}>
                    <Header />
                    <FormRegister />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card />
                </Grid>
            </Grid>                  
            </div>
        );
    }
}

export default Main;