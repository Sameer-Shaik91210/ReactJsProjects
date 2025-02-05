import React from "react";
import { TimeProvider } from "./context/TimeContext";
import Navbar from "./components/Navbar";
import TimeZoneContainer from "./components/TimeZoneContainer";

function App() {
  return (
    <TimeProvider>
      <Navbar />
      <TimeZoneContainer />
    </TimeProvider>
  );
}

export default App;
