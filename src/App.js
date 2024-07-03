import React, { useState } from 'react';
import Login from './Component/Login';
import Register from './Component/Register';


const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignIn = (e, data) => {
    e.preventDefault();
    console.log('Sign In:', data);
    // Redirect to registration page or perform other actions
    setShowLogin(false);
  };

  const handleRegister = (e, data) => {
    e.preventDefault();
    console.log('Register:', data);
    // Perform registration logic
  };

  return (
    <div>
      {showLogin ? <Login handleSignIn={handleSignIn} /> : <Register handleRegister={handleRegister} />}
    </div>
  );
};

export default App;
