import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../slices/taskSlice';

const TaskFormModal = ({ isOpen, onClose }) => {
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
            setDueDate('');

            onClose(); 
        }
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className={`modal-overlay ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
            <div className="modal-content">
                <div className="w-64 bg-white rounded shadow relative">
                    <button
                        className="absolute top-2 right-2 p-1 text-black-600 border border-solid border-black rounded-full"
                        onClick={onClose} 
                    >
                        X
                    </button>
                    <h2 className="text-center text-xl font-semibold mb-4 p-4 bg-blue-500 text-white rounded-t">
                        Create a New Task
                    </h2>
                    <div className="p-4">
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
                </div>
            </div>
        </div>
    );
};

export default TaskFormModal;
