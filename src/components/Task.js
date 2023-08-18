import React, { useState } from "react";



const Task = ({ title, notes, dueDate, importance }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">{ title } </h3>
        <label> Notes: </label>
        <p className="text-gray-700"> { notes } </p>
        <p className="text-gray-500 mb-2"> Due Date: { dueDate } </p>
      <p className={`text-${importance}-500 mb-2`}>Importance: { importance } </p>
      </div>
    );
  };

export default Task;