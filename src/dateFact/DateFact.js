import React, { useState, useEffect } from 'react';

export const DateFact = ({ month, day }) => {
  useEffect(() => {
    getDateFact(month, day);
  }, [day, month]);

  const [data, setData] = useState();

  const getDateFact = (month, day) => {
    const url = `http://numbersapi.com/${month}/${day}?json`;
    const option = {
      referrerPolicy: "unsafe-url",
    };
    fetch(url, option)
      .then((response) => response.json())
      .then((result) => setData(result));
  };

  return (
    <div style={{ display: 'inherit', maxWidth: 400 }}>
      <p>{data?.text}</p>
    </div>
  );
};
