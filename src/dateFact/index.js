import React, { useState } from 'react';
import { DateFact } from './DateFact';

export const DateFactMain = () => {

  const [date, setDate] = useState();
  const [month, setMonth] = useState();

  const handleonDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDate(newDate.getDate());
    setMonth(newDate.getMonth());
  };

  return (
    <div style={{ display: 'block' }}>
      <input type="date" onChange={handleonDateChange} />
      {/* <DateFact month={1} day={23} />
      <DateFact month={4} day={1} />
      <DateFact month={12} day={25} /> */}
      <DateFact month={month} day={date} />
    </div>
  );

};