import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

export const StopWatch = () => {
  const [status, setStatus] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log(status);
    if (status) {
      console.log("before setInterval");
      const timer = setInterval(tick, 1000);
      console.log("after setInterval");
      const cleanup = () => {
        console.log("cleanup");
        return clearInterval(timer);
      };
      console.log("return cleanup");
      return cleanup;
    }
    return () => cleanup();
  }, [status]);

  const handleStart = () => {
    setStatus(true);
  };

  const handleStop = () => {
    setStatus(false);
  };

  const handleReset = () => {
    setTime(0);
  };

  const tick = () => {
    console.log('1 Second has passed');
    return setTime((time) => time + 1);
  };

  const renderMinutesandSeconds = (time) => {
    let minute = 0;
    let second = '' + time;
    if (second.length < 2) second = second.padStart(2, '0');
    return (minute + ":" + second);
  };

  return (
    <div>
      <p>{renderMinutesandSeconds(time)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};