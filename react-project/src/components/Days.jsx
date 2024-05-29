// src/Days.js
import React from 'react';
import Calendar from './Calendar';
import Month from './Month';

const Days = ({ currentDate }) => {
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="empty"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    days.push(<div key={d} className="day">{d}</div>);
  }

  return <div className="days">{days}</div>;
};

export default Days;
