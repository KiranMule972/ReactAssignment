import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import LoginEmages from './LoginEmages.png'; // Import the image file

const Login = ({ handleSignIn }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="outer-container">
    <div className="container"> {/* Add container class */}
      <div className="card"> {/* Add card class */}
      <center><button type="submit">SignUp</button></center>
      <center><img src={LoginEmages} height='50px' width='50px'  alt="Login Icon" /></center>
        <form onSubmit={(e) => handleSignIn(e, loginData)}>
           <input type="email" name="email" placeholder="username" value={loginData.email} onChange={handleChange} required /><br/>
           <input type="password" name="password" placeholder='password' value={loginData.password} onChange={handleChange} required /><br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
