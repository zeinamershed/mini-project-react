
import React from 'react';
import Calendar from './Calendar';
import Days from './Days';

const Month = ({ currentDate, onPrevMonth, onNextMonth }) => {
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div>
      <button onClick={onPrevMonth}>Previous</button>
      <span>{month} {year}</span>
      <button onClick={onNextMonth}>Next</button>
    </div>
  );
};

export default Month;

