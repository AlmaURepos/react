import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (e) => {
    setSeconds(Number(e.target.value));
  };

  const startTimer = () => {
    if (seconds > 0) {
      setTimeLeft(seconds);
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Таймер</h2>

      <div className="mb-3">
        <input
          type="number"
          className="form-control w-25 mx-auto"
          placeholder="Введите секунды"
          value={seconds}
          onChange={handleChange}
          disabled={isRunning}
        />
      </div>

      <button
        className="btn btn-primary mb-3"
        onClick={startTimer}
        disabled={isRunning || seconds <= 0}
      >
        Начать
      </button>

      <h3>{timeLeft > 0 ? `Осталось: ${timeLeft} секунд` : "Готово!"}</h3>
    </div>
  );
}

export default Timer;
