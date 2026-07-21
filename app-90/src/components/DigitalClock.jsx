import React, { useState, useRef } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const intervalRef = useRef(null);

  const startClock = () => {
    if (intervalRef.current) return; // agar pehle se chal rahi hai

    intervalRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  };

  const stopClock = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="container text-center">
      <div className="alert alert-info" style={{ height: "100vh" }}>
        <h1>Digital Clock</h1>

        <h2>{time}</h2>

        <button className="btn btn-success me-2" onClick={startClock}>
          Start
        </button>

        <button className="btn btn-danger" onClick={stopClock}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default DigitalClock;