import React, { useState, useEffect } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      });
    };

    // Update the time immediately
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="  text-violet-500 text-xs font-bold font-orbitron tracking-widest text-end">
        IST {time.hours}:{time.minutes} <span className=" text-black dark:text-white text-xs font-bold tracking-widest orbitron">KERALA</span>
      </p>
    </div>
  );
};

export default TimeComponent;
