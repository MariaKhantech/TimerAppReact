import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



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

 //set the minutes and seconds
 const [ minutes, setMinutes ] = useState(24);
 const [seconds, setSeconds ] =  useState(59);

//set whether the timer is active 
 const [isActive, setIsActive] = useState(false);

 //fucntion to start the timer
 function startTimer() {
  setIsActive(true);
}

function stopTimer() {
  setIsActive(false);
}


  useEffect(()=>{
  let myInterval = setInterval(() => {
    //if is active = true start the timer
    if (isActive) {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
        }
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });

  return (
      <div>
        { minutes === 0 && seconds === 0
            ? 'Time up'
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        <Button color="secondary" onClick={() => startTimer()} >Start</Button>
        <Button color="secondary" onClick={() => stopTimer()}>Stop</Button>
      </div>
      
  )

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <section>
//             <div className= "minutes">
//             <div className= "value">00</div>
//             <span>Minutes</span>
//             </div>
//             <div className= "seconds">
//             <div className= "value">00</div>
//             <span>Seconds</span>
//             </div>
//             <div>
//     {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//  </div>  
//             {/* <Button onClick={() => setTimeOn(true)}>Start</Button>
//             <Button onClick={() => setTimeOn(false)}>Stop</Button> */}

//         </section>
//       </CardContent>
//       <CardActions>
//       </CardActions>
//     </Card>
//   );
}
