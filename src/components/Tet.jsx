import React, { useState, useEffect } from 'react';

const Tet = () => {
  const [dayString, setDayString] = useState('');
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const countDate = new Date('Jan 22, 2023 00:00:00').getTime();
    setInterval(() => {
      const now = new Date().getTime();

      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const d = Math.floor(gap / day);
      const h = Math.floor((gap % day) / hour);
      const m = Math.floor((gap % hour) / minute);
      const s = Math.floor((gap % minute) / second);

      setDayString(`${d} Ngày`);
      setTimeString(`${h > 9 ? h : '0' + h} Giờ ${m > 9 ? m : '0' + m} Phút ${s > 9 ? s : '0' + s} Giây`);
    }, 1000);
  }, []);
  return (
    <div>
      <div>{dayString}</div>
      <div>{timeString}</div>
    </div>
  );
};

export default Tet;
