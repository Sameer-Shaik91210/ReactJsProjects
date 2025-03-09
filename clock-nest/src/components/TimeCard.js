import React, { useEffect, useState } from "react";
import "../styles/timecard.css";

const TimeCard = ({ label, time }) => {
  const [clockTime, setClockTime] = useState(new Date(time));

  // ⏳ When `time` (prop) changes, update `clockTime`
  useEffect(() => {
    setClockTime(new Date(time));
  }, [time]);

  // 🕰️ Get hours, minutes, seconds for the analog clock
  const hours = clockTime.getHours() % 12;
  const minutes = clockTime.getMinutes();
  const seconds = clockTime.getSeconds();

  // 🎯 Calculate the rotation angles for clock hands
  const hourDeg = hours * 30 + minutes * 0.5;
  const minDeg = minutes * 6;
  const secDeg = seconds * 6;

  return (
    <div className="time-card">
      <h3>{label}</h3>

      {/* 🕰 Analog Clock */}
      <div className="clock">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minDeg}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secDeg}deg)` }}
        ></div>
        <div className="center-dot"></div>
      </div>

      {/* ⌚ Digital Time Display */}
      <p>{clockTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeCard;
