import { useState, useEffect } from "react";

const DateAndTime = () => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
  };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <>
      <div>
        <p>
          Дата: {date.toLocaleString("ru", options)}
          <br />
          Точное время: {date.toLocaleTimeString()}
        </p>
      </div>
    </>
  );
};

export default DateAndTime;
