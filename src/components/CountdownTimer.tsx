import { useState, useEffect } from 'react';

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeSince, setTimeSince] = useState<TimeUnits>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2016-10-03T00:00:00Z'); // Oct 3, 2016

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeSince({ days, hours, minutes, seconds });
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {timeSince.days} days, {timeSince.hours.toString().padStart(2, '0')} hours, {timeSince.minutes.toString().padStart(2, '0')} minutes, {timeSince.seconds.toString().padStart(2, '0')} seconds
    </span>
  );
};

export default CountdownTimer; 