import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { setTasks } from '../slices/taskSlice';
import Task from './Task';

const TaskList = () => {
  const selectUser = (state) => state.auth.user; 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tasks = useSelector((state) => state.tasks.tasks);

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
    return <div>Loading tasks...</div>;
  }


  return (
    <div className="w-64 mx-auto bg-white rounded-lg shadow p-4 border-b-2 border-gray-300">
    <h2 className="text-center text-xl font-bold mb-4">Your Tasks</h2>
    {tasks.map((task) => (
      <Task key={task.id} {...task} />
    ))}
  </div>

  );
};

export default TaskList;
