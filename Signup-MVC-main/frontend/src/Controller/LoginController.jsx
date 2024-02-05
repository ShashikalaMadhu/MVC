// src/controllers/LoginController.js
import React, { useState } from 'react';
import axios from 'axios';
import UserModel from '../Model/userModel';
import LoginView from '../View/loginview';
import { useNavigate } from 'react-router-dom';

const LoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);

        const { role, message } = result.data;

        if (message === "Success") {
          if (role === "employee") {
            window.alert("Admin.");
            navigate("/home");
          } else if (role === "customer") {
            navigate("/home");
          }
        } else {
          alert(message);
        }
      })
      .catch(err => {
        console.log(err);
        // Handle other errors if necessary
      });
  };

  return <LoginView email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />;
};

export default LoginController;
