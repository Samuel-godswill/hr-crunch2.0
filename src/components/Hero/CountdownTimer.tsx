import { useEffect, useState } from "react";  
import { motion } from "framer-motion";

const CountdownTimer = () => {
  // Updated date to June 27th, 2025
  const eventDate = new Date("2025-06-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (isExpired) {
    return (
      <div className="countdown-expired" role="alert">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event has started!
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="countdown" role="timer" aria-label="Countdown timer to June 27th, 2025">
      <div>
        <motion.h1
          key={timeLeft.days}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label={`${timeLeft.days} days`}
        >
          {String(timeLeft.days).padStart(2, '0')}
        </motion.h1>
        <span>Days</span>
      </div>
      <div>
        <motion.h1
          key={timeLeft.hours}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label={`${timeLeft.hours} hours`}
        >
          {String(timeLeft.hours).padStart(2, '0')}
        </motion.h1>
        <span>Hours</span>
      </div>
      <div>
        <motion.h1
          key={timeLeft.minutes}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label={`${timeLeft.minutes} minutes`}
        >
          {String(timeLeft.minutes).padStart(2, '0')}
        </motion.h1>
        <span>Minutes</span>
      </div>
      <div>
        <motion.h1
          key={timeLeft.seconds}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-label={`${timeLeft.seconds} seconds`}
        >
          {String(timeLeft.seconds).padStart(2, '0')}
        </motion.h1>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;