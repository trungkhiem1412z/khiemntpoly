import React, { useState, useEffect } from 'react'

const formatDate = (yourDate) => {
    const today = new Date(),
        hrs = (Math.floor(Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) / 60 / 60)) % 24,
        min = (Math.floor(Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) / 60)) % 60,
        sec = Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) % 60;
    return `${(hrs > 9) ? hrs : "0" + hrs} Giờ ${(min > 9) ? min : "0" + min} Phút ${(sec > 9) ? sec : "0" + sec} Giây`;
}

const CountTime = () => {
    const [timeString, setTimeString] = useState('');
    const [dateString, setDayString] = useState('');
    useEffect(() => {
        setInterval(() => {
            const yourDate = new Date("2020-07-31T10:25:00");
            const newDateString = Math.floor(Math.floor((new Date().valueOf() - yourDate.valueOf()) / 1000) / 60 / 60 / 24);
            const newTimeString = formatDate(yourDate);

            setDayString(`${newDateString} Ngày`);
            setTimeString(newTimeString);
        }, 1000)
    }, [])
    return (
        <div className='my-3'>
            <div className='text-center text-3xl'>{dateString}</div>
            <div className='text-center text-2xl'>{timeString}</div>
        </div>
    )
}

export default CountTime