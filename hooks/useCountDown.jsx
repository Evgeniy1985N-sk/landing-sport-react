import { useState, useEffect } from 'react';

const useCountDown = () => {
  const INITIAL_TIME = .6 * 60 * 1000; // 180000 ms
  
  const [countDown, setCountDown] = useState(INITIAL_TIME);

  useEffect(() => {
    if (countDown <= 0) return;

    const interval = setInterval(() => {
      setCountDown(prevCountDown => {
        const newValue = prevCountDown - 1000;
        return newValue >= 0 ? newValue : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export { useCountDown };