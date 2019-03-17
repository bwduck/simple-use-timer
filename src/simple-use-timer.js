import { useRef } from 'react';

const useTimer = () => {
  const timer = useRef(0);

  const startTimer = () => {
    timer.current = Date.now();
  };

  const getElapsedTime = () => Date.now() - timer.current;

  return [startTimer, getElapsedTime];
};

export default useTimer;
