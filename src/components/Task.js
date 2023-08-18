// Task.js
import React from 'react';

const Task = ({ title, notes, dueDate, importance }) => {
  const importanceClass = importance === 'high' ? 'bg-red-500' : importance === 'medium' ? 'bg-yellow-500' : 'bg-gray-500';

  return (
    <div className={`p-4 rounded shadow-md ${importanceClass}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{notes}</p>
      <p className="text-sm text-gray-400">Due: {dueDate}</p>
    </div>
  );
};

export default Task;
