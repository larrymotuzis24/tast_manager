import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../firebaseActions';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn(email, password));
        
    };

    const user = useSelector((state) => state.auth.user);

    if (user) {
      return <Navigate to="/" />;
    }
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <input
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  </div>
  );
}

export default SignIn;
