import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUser } from "../firebaseActions";

const Header = () => {
  const dispatch = useDispatch();



  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    dispatch(signOutUser())
  };


  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/"> Task Manager </Link>
          </h1>
        </div>
        <ul className="flex space-x-4">
          {!user ? (
            <>
              <li><Link to="/signin" className="hover:text-gray-300">Sign In</Link></li>
              <li><Link to="/signup" className="hover:text-gray-300">Sign Up</Link></li>
            </>
          ) : (
            <>
              <li className="font-semibold">Welcome, {user.email}!</li>
              <li><button onClick={handleSignOut} className="text-blue-500 hover:underline">Sign Out</button></li>
            </>
          )}
        </ul>

      </nav>
    </header>
  );
};

export default Header;