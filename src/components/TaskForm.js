import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../slices/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.uid);

  const handleCreateTask = () => {
    if (title && description) {
      dispatch(createTask({ title, description, userId }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="w-64 mx-auto mt-4">
      {/* Add a centered wrapper with a maximum width */}
      <h2 className="text-center mb-4">Create a New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <button
        onClick={handleCreateTask}
        className="block mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Create Task
      </button>
    </div>
  );
};

export default TaskForm;
