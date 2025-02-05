import React from "react";

const TimeCard = ({ label, time, isEditable, onChange }) => {
  return (
    <div className="time-card">
      <h3>{label}</h3>

      {isEditable ? (
        <input type="datetime-local" value={time} onChange={onChange} />
      ) : (
        <p>{time}</p>
      )}
    </div>
  );
};

export default TimeCard;
