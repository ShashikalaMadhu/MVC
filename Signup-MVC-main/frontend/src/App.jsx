// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupController from './Controller/SignupController';
import LoginController from './Controller/LoginController';
import Home from './View/home'; // Assuming you have a Home component

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<SignupController />} />
      <Route path="/login" element={<LoginController />} />
      <Route path="/home" element={<Home />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default App;
