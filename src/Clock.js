import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
      console.log("running")
    }, 1000);

    console.log("render")
    // returning a cleanup function
    return function cleanup() {
      console.log("cleanup")
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}
export default Clock;
