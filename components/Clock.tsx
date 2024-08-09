import { NextPage } from "next";
import { useEffect, useState } from "react";

const Clock: NextPage = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const displayHour = formatTime(time.getHours());
  const displayMin = formatTime(time.getMinutes());
  const displaySec = formatTime(time.getSeconds());

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <h1 className="text-4xl font-bold font-mono">
      {displayHour}
      <span className="animate-blink">:</span>
      {displayMin}
      <span className="animate-blink">:</span>
      {displaySec}
      <br />
      <span className="text-xs opacity-0 cursor-pointer duration-500 hover:opacity-100">
        timezone: {timeZone}
      </span>
    </h1>
  );
};

export default Clock;
