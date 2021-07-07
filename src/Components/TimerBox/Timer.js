import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "../StartButton/Button";
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  //Variables to set time, and turn timer on
  let [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
      let interval = null;

      if (timerOn) {
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 10)
        }, 10)
      } else {
        clearInterval(interval)
      }

      return () => clearInterval(interval)

  }, [timerOn])
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <section>
            <div className= "minutes">
            <div className= "value">{time}</div>
            <span>Minutes</span>
            </div>
            <div className= "seconds">
            <div className= "value">00</div>
            <span>Seconds</span>
            </div>
            <Button onClick={() => setTimeOn(true)}>Start</Button>
            <Button onClick={() => setTimeOn(false)}>Stop</Button>

        </section>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
