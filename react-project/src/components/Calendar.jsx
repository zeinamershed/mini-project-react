import React, { useState } from 'react';
import Month from './Month';
import Days from './Days';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div>
      <Month 
        currentDate={currentDate} 
        onPrevMonth={handlePrevMonth} 
        onNextMonth={handleNextMonth} 
      />
      <Days currentDate={currentDate} />
    </div>
  );
};

export default Calendar;

