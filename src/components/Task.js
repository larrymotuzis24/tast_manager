// Task.js
import React from 'react';


const Task = ({ title, notes, dueDate, importance }) => {
  let importanceClass = '';
  let textColorClass = '';

  if (importance === 'high') {
    importanceClass = 'bg-red-500';
    textColorClass = 'text-white';
  } else if (importance === 'medium') {
    importanceClass = 'bg-yellow-400';
    textColorClass = 'text-gray-800';
  } else {
    importanceClass = 'bg-gray-300';
    textColorClass = 'text-gray-700';
  }

  return (
    <div className={`p-4 rounded shadow-md ${importanceClass}`}>
      <h3 className={`text-lg font-semibold mb-2 ${textColorClass}`}>{title}</h3>
      <p className={`mb-2 ${textColorClass}`}>{notes}</p>
      <p className={`text-sm ${textColorClass}`}>Due: {dueDate}</p>
    </div>
  );
};

export default Task;