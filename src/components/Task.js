import React, { useState } from "react";



const Task = ({ title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

export default Task;