import { useRef } from "react";

const useTimer = () => {
  const timer = useRef(0);
  const timerStarted = useRef(false);

  const startTimer = () => {
    if (!timerStarted.current) {
      timer.current = Date.now();
    }
    timerStarted.current = true;
  };

  const getElapsedTime = () => Date.now() - timer.current;

  return [startTimer, getElapsedTime];
};

export default useTimer;
