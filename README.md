# simpleUseTimer

`simpleUseTimer` is a bare-bones React Hook that helps time events.  It returns two functions, one which starts the timer, and one that gets the time elapsed since the start.  Calling the start function again will reset the timer.

[![version](https://img.shields.io/npm/v/simple-use-timer.svg)](https://www.npmjs.com/package/simple-use-timer)
[![minified size](https://img.shields.io/bundlephobia/min/simple-use-timer.svg)](https://www.npmjs.com/package/simple-use-timer)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/simple-use-timer.svg)](https://www.npmjs.com/package/simple-use-timer)
[![downloads](https://img.shields.io/npm/dt/simple-use-timer.svg)](https://www.npmjs.com/package/simple-use-timer)
[![build](https://api.travis-ci.com/CharlesStover/simple-use-timer.svg)](https://travis-ci.com/CharlesStover/simple-use-timer/)

## Install

* `npm install simple-use-timer` or
* `yarn add simple-use-timer`

## Use

```JavaScript
import React, { useState } from 'react';
import useTimer from 'simple-use-timer';

const TimerTest = () => {
  const [timeStarted, setTimeStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, getTime] = useTimer();

  const handleTimerClick = () => {
    if (timeStarted) {
      setElapsedTime(getTime());
    } else {
      startTime();
      setTimeStarted(true);
    }
  };

  return (
    <>
      <button type="button" onClick={handleTimerClick}>
        {timeStarted ? 'Stop Timer' : 'Start Timer'}
      </button>
      {elapsedTime > 0 && <h2>Elapsed time is {elapsedTime / 1000} seconds</h2>}
    </>
  );
};
```
