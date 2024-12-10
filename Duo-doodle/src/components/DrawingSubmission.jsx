import { useState, useRef, useEffect } from "react";
import Canvas from "./Canvas";


const DrawingSubmission = () => {
  const Ref = useRef(null)
  const [ timer, setTimer ] = useState(`1:00`);

  useEffect(() => {
    let timeRemaining = 60;

    const timeDecrement = () => {
      if (timeRemaining <= 0) {
        setTimer(`0:00`);
        clearInterval(startTimer);
        return;
      }

      if (timeRemaining <= 30){
        const addAlert = () => {
          const timerElement = document.querySelector(`.timer`);
          timerElement.id = "timer-alert";
          Ref.current = timerElement.id;
        }
        if (!Ref.current) addAlert();
      }
    
      timeRemaining--;
      
      const minutes = Math.floor(timeRemaining/60);
      const seconds = timeRemaining % 60;
      
      const clock = `${minutes}:${seconds > 9 ? seconds: `0${seconds}`}`;
      setTimer(clock); 
    };
    
    const startTimer = setInterval(timeDecrement, 1000);

    return () => clearInterval(startTimer);
  
  }, [])
 

  return (
    <>
      <h1>Your Turn to draw!</h1>
      <h2>Topic: MEADOW</h2>
      <canvas><Canvas /></canvas>
      <p className ="timer">{timer}</p>
    </>
  );
}

export default DrawingSubmission