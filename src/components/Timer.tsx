import React, { useState, useEffect } from 'react';

type TimerProps = {
  initialTimeSec: number;
  size: string;
  onFinishTime: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTimeSec, size, onFinishTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeSec);

  useEffect(() => {
    // No hacer nada si ya hemos llegado a 0
    if (!timeLeft){
        onFinishTime()
        return
    };

    // Decrementar el tiempo restante cada segundo
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Limpiar el intervalo si el componente se desmonta
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Colorear de rojo si el tiempo ha llegado a 0
  const color = timeLeft === 0 ? 'red' : 'black';

  useEffect(() => {
    setTimeLeft(initialTimeSec)
  },[initialTimeSec])

  return (
    <div style={{ color, fontSize: size }}>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;