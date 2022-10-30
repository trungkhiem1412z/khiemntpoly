import React, { useState, useEffect } from 'react';

const Tet = () => {
  const [dayString, setDayString] = useState('');
  const [hourString, setHourString] = useState('');
  const [minuteString, setMinuteString] = useState('');
  const [secondString, setSecondString] = useState('');
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

      setDayString(`${d}`);
      setHourString(`${h > 9 ? h : '0' + h}`);
      setMinuteString(`${m > 9 ? m : '0' + m}`);
      setSecondString(`${s > 9 ? s : '0' + s}`);
    }, 1000);
  }, []);
  return (
    <div className='flex gap-3'>
      <div className='flex flex-col rounded-lg bg-white p-5 text-center drop-shadow-md'>
        <div className='text-7xl text-yellowcus-1'>{dayString}</div>
        <span className='text-3xl font-bold uppercase'>Ngày</span>
      </div>
      <div className='flex flex-col rounded-lg bg-white p-5 text-center drop-shadow-md'>
        <div className='text-7xl text-yellowcus-1'>{hourString}</div>
        <span className='text-3xl font-bold uppercase'>Giờ</span>
      </div>
      <div className='flex flex-col rounded-lg bg-white p-5 text-center drop-shadow-md'>
        <div className='text-7xl text-yellowcus-1'>{minuteString}</div>
        <span className='text-3xl font-bold uppercase'>Phút</span>
      </div>
      <div className='flex flex-col rounded-lg bg-white p-5 text-center drop-shadow-md'>
        <div className='text-7xl text-yellowcus-1'>{secondString}</div>
        <span className='text-3xl font-bold uppercase'>Giây</span>
      </div>
    </div>
  );
};

export default Tet;
