import React from 'react';
import { Link } from 'react-router-dom';

const SignInMessage = () => {
  return (
    <div>
      <p>Please sign in to add a task.</p>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
};

export default SignInMessage;
