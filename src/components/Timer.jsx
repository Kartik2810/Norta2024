import React, { useEffect, useState } from "react";

function Timer() {
  const calculateTimeLeft = () => {
    const dest = new Date("Oct 03, 2024 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = dest - now;

    if (diff <= 0) {
      return {
        days: "03",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="text-white flex  justify-evenly flex-wrap md:my-20 ">
        <div className="md:flex gap-32 ">
          <div className="text-center max-md:mb-10">
            <h2 className="md:text-9xl text-7xl font-bold text title">
              {timeLeft.days}
            </h2>
            <p className="sm:text-3xl text-xl">Days</p>
          </div>
          <div className="text-center max-md:mb-10">
            <h2 className="md:text-9xl text-7xl font-bold text title">
              {timeLeft.hours}
            </h2>
            <p className="sm:text-3xl text-xl">hours</p>
          </div>
        </div>
        <div className="md:flex gap-32 max-md:mb-10">
          <div className="text-center max-md:mb-10">
            <h2 className="md:text-9xl text-7xl font-bold text title">
              {timeLeft.minutes}
            </h2>
            <p className="sm:text-3xl text-xl">minutes</p>
          </div>
          <div className="text-center max-md:mb-10">
            <h2 className="md:text-9xl text-7xl font-bold text title">
              {timeLeft.seconds}
            </h2>
            <p className="sm:text-3xl text-xl">second</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
