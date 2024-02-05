// src/views/LoginView.js
import React from 'react';

const LoginView = ({ email, password, setEmail, setPassword, handleSubmit }) => (
  <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2><center>Login</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="text"
            placeholder='Enter Email'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder='Enter Password'
            name='password'
            className='form-control rounded-0'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Login
        </button>
      </form>
    </div>
  </div>
);

export default LoginView;
