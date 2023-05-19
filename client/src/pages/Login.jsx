import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs)
      console.log(inputs);
      navigate('/')
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Login</button>
        { err && <p>This is an error</p>}
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}
 
export default Login
