// src/controllers/SignupController.js
import React, { useState } from 'react';
import axios from 'axios';
import SignupModel from '../Model/singupModel'; // Updated import
import SignupView from '../View/signupview';
import { useNavigate } from "react-router-dom";

const SignupController = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", new SignupModel(name, email, password)) // Updated model usage
      .then(result => {
        console.log(result);
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return <SignupView name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />;
};

export default SignupController;
