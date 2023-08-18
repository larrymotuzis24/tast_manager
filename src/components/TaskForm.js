import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../slices/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [importance, setImportance] = useState('low');

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.uid);

  const handleCreateTask = () => {
    if (title && notes) {
      dispatch(createTask({ title, notes, dueDate, importance, userId }));
      setTitle('');
      setNotes('');
    }
  };

  return (
    <div className="w-64 mx-auto mt-4 border border-gray-300 rounded shadow p-4">

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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
          Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="importance">
          Importance
        </label>
        <select
          id="importance"
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
          className="w-full border rounded py-2 px-3"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
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
