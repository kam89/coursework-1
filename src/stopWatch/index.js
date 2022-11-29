import React, { useState, useEffect } from 'react';

export const StopWatch = () => {
  const [status, setStatus] = useState('stop');
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (status === 'stop') return clearInterval(timer);
    timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, [status]);

  const handleStart = () => {
    setStatus('start');
  };

  const handleStop = () => {
    setStatus('stop');
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