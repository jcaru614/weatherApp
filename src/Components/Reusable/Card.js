import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // marginLeft: '-2px',
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: 300,
    backgroundColor: '#CDCDCD',
    borderRadius: '10px',
    overflow: 'scroll',
    display: 'inline-block',
  },
  root2: {
    flexWrap: 'wrap',
    '& > *': {
        height: theme.spacing(20),
        backgroundColor: 'rgb(64,81,181)',
        borderRadius: '10px',
        overflow: 'scroll',
    },
    root3: {
        width: 300,
    }
},

}));

function valuetext(value) {
    return `${value}°C`;
  }

export default function MediaCard(props) {
    console.log("prop ", props)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <div className={classes.root2}>
            <Paper elevation={3}>
                {props.children}
            </Paper>
        </div>

        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className={classes.root3}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
      </CardActions>
    </Card>
  );
}
