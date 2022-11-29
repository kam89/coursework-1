import React, { useState, useEffect } from 'react';

export const DateFact = ({ month, day }) => {
  useEffect(() => {
    getDateFact(month, day);
  }, []);

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
    <div>
      <p>{data?.text}</p>
    </div>
  );
};
