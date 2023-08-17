import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { Route, Routes, Navigate  } from 'react-router-dom';
import SignUp from "./components/SignUp";
import SignIn from './components/SingIn';
import HomePage from "./components/Home";
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
  return (
    <div>
       <Header user={user} />
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
