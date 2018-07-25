import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    marginLeft: 150,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardB:{
    display: 'none',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <div className="cardLat">
        <Card className={classes.cardA || classes.card}>
          <CardMedia
            className={classes.media}
            image="images/images/logo.png"
            title="Adopets"
          />
          <CardContent>
            <Typography gutterBottom variant="title" align="center" className="setColor">
              ABOUT US
            </Typography>
            <Typography component="p" align="center">
              Knock over christmas tree. Nap all day. Scoot butt on the rug. Making sure that fluff gets into the owner’s eyes.
            </Typography>
          </CardContent>
          <CardActions>
              <div style={{ width: '100%', textAlign: 'right' }}>
                  <Button style={{ marginRight: '20px' }}>
                    DISMISS
                  </Button>
                  <Button variant="contained" color="secondary">
                    Next
                  </Button>
              </div>            
          </CardActions>
        </Card>
      </div>
      <div className="cardLat">
      <Card className={classes.cardB || classes.card}>
        <CardMedia
          className={classes.media}
          image="images/images/pic.jpg"
          title="SHELTER PICTURE TIP"
        />
        <CardContent>
          <Typography gutterBottom variant="title" align="center" className="setColor">
            SHELTER PICTURE TIP
          </Typography>
          <Typography component="p" align="center">
            Knock over christmas tree. Nap all day. Scoot butt on the rug. Making sure that fluff gets into the owner’s eyes.
          </Typography>
        </CardContent>
        <CardActions>
            <div style={{ width: '100%', textAlign: 'right' }}>
                <Button style={{ marginRight: '20px' }}>
                  DISMISS
                </Button>
                <Button variant="contained" color="secondary">
                  Next
                </Button>
            </div>            
        </CardActions>
      </Card>
    </div>
  </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
