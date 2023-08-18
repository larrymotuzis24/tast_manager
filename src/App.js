import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { Route, Routes, Navigate  } from 'react-router-dom';
import SignUp from "./components/SignUp";
import SignIn from './components/SingIn';
import HomePage from "./components/Home";
import TaskFormModal from './components/TaskFormModal';
import TaskList from './components/TaskList';
import { setUser } from './slices/authSlice';
import Header from "./components/Header";

const App = () => {
  const user = useSelector((state) => state.auth.user) || localStorage.getItem('user');
  const dispatch = useDispatch();

 

  useEffect(() => {
    if(user){
      dispatch(setUser(JSON.parse(user)))
    }
    // eslint-disable-next-line
}, [dispatch]);

const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <HomePage />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/tasks"
          element={
            <>
              <TaskList />
              <button
                onClick={() => setIsModalOpen(true)} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Create Task
              </button>
              {isModalOpen && (
                <TaskFormModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)} 
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
