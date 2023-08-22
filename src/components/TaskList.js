// TaskList.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { setTasks } from '../slices/taskSlice';
import Task from './Task';
import { deleteTask } from '../slices/taskSlice';

const TaskList = () => {
  const selectUser = (state) => state.auth.user; 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleEditTask = () => {

  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId))
  };


  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const tasksQuery = query(collection(db, 'tasks'), where('userId', '==', user.uid));
          const tasksSnapshot = await getDocs(tasksQuery);

          const tasksData = tasksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          dispatch(setTasks(tasksData));
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      fetchTasks();
    }
  }, [user, dispatch]);

  console.log(tasks); // Log tasks to check if data is available

  if (tasks.length === 0) {
    return <div> No Tasks </div>;
  }

  return (
    <div className="w-full mx-auto p-4 border-b-2 border-gray-300">
      <h2 className="text-center text-xl font-bold mb-4">Your Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <Task key={task.id} {...task} />
            <div className="task-options absolute top-0 right-0 m-2">
              <FontAwesomeIcon icon={faEllipsisV} className="options-icon" />
              <div className="options-dropdown bg-white shadow-md rounded-lg p-2 absolute hidden">
                <div className="option" onClick={() => handleEditTask(task.id)}>
                  <FontAwesomeIcon icon={faEdit} className="option-icon" />
                  Edit
                </div>
                <div className="option" onClick={() => handleDeleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrash} className="option-icon" />
                  Delete
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
