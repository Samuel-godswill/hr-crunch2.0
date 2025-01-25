import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const eventDate = new Date("2025-03-28T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="countdown">
      <div>
        <motion.h1
          key={timeLeft.days}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.days}
        </motion.h1>
        <span>Days</span>
      </div>
      <div>
        <motion.h1
          key={timeLeft.hours}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.hours}
        </motion.h1>
        <span>Hours</span>
      </div>
      <div>
        <motion.h1
          key={timeLeft.minutes}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.minutes}
        </motion.h1>
        <span>Minutes</span>
      </div>{" "}
      <div>
        <motion.h1
          key={timeLeft.seconds}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {timeLeft.seconds}
        </motion.h1>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
