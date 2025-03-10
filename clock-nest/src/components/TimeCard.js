import React, { useEffect, useState } from "react";
import "../styles/timecard.css";

const TimeCard = ({ label, time, isEditable, onChange }) => {
  const [clockTime, setClockTime] = useState(new Date(time));

  // 🕒 Keep the clock running in real-time
  useEffect(() => {
    // Ensure the clock updates every second
    const interval = setInterval(() => {
      setClockTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    // Cleanup the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  // ⏳ Sync time if external `time` changes (Indian time update)
  useEffect(() => {
    setClockTime(new Date(time));
  }, [time]);

  // 🕰️ Get hours, minutes, seconds for analog clock
  const hours = clockTime.getHours() % 12;
  const minutes = clockTime.getMinutes();
  const seconds = clockTime.getSeconds();

  // 🎯 Calculate the rotation angles for clock hands
  const hourDeg = hours * 30 + minutes * 0.5; // 360° / 12 hours = 30° per hour
  const minDeg = minutes * 6; // 360° / 60 minutes = 6° per minute
  const secDeg = seconds * 6; // 360° / 60 seconds = 6° per second

  return (
    <div className="time-card">
      <h3>{label}</h3>

      {/* Editable Input (Only for Indian Time) */}
      {isEditable && (
        <input
          type="datetime-local"
          value={time}
          onChange={onChange}
          className="time-input"
        />
      )}

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
