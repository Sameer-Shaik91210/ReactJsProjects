import React from "react";
import { useTime } from "../context/TimeContext";
import TimeCard from "./TimeCard";
import "../styles/global.css";

const convertTime = (indianTime, offset) => {
  const date = new Date(indianTime);
  date.setHours(date.getHours() + offset);
  return date.toISOString().slice(0, 16); // Format YYYY-MM-DDTHH:MM
};

const TimeZoneContainer = () => {
  const { state, dispatch } = useTime();

  const handleIndianTimeChange = (event) => {
    dispatch({ type: "UPDATE_TIME", payload: event.target.value });
  };
  return (
    <div className="timezone-container">
      {/* Indian Time (Editable) */}

      <TimeCard
        label="India (IST)"
        time={state.indianTime}
        isEditable={true}
        onChange={handleIndianTimeChange}
      />
      <div class="abroad-zones">
        {/* Other Time Zones (Non-Editable) */}
        <TimeCard
          label="New York (EST)"
          time={convertTime(state.indianTime, -10.5)}
        />
        <TimeCard
          label="London (GMT)"
          time={convertTime(state.indianTime, -5.5)}
        />
        <TimeCard
          label="Tokyo (JST)"
          time={convertTime(state.indianTime, 3.5)}
        />
      </div>
    </div>
  );
};

export default TimeZoneContainer;
