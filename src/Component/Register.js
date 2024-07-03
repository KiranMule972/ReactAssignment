import React, { useState } from 'react';
import './Login.css';

const Register = ({ handleRegister }) => {
  const [registerData, setRegisterData] = useState({ name: '', dob: '', email: '', password: '' });
  const [formDataList, setFormDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormDataList = [...formDataList, registerData];
    setFormDataList(newFormDataList);
    console.log(newFormDataList);
    setRegisterData({ name: '', dob: '', email: '', password: '' }); // Clear form fields after submission
  };

  return (
    <div>
      <div>
    <div className="container">
      <div className="card">
        
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Name" value={registerData.name} onChange={handleChange} required /><br /><br />
          <input type="date" name="dob" placeholder="Enter DOB" value={registerData.dob} onChange={handleChange} required /><br /><br />
          <input type="email" placeholder="Enter EmailId" name="email" value={registerData.email} onChange={handleChange} required /><br /><br />
          <input type="password" placeholder="Enter Password" name="password" value={registerData.password} onChange={handleChange} required /><br />
          <button type="submit">Register</button>
        </form>
        <br />
        </div>
        </div>
        {formDataList.length > 0 &&
        <center>
          <table border={2}>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {formDataList.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </center>
        }
      </div>
    </div>
    
  );
};

export default Register;
