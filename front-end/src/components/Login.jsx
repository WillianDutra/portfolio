import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateEmail, validatePassword } from '../utils/validateInputs';

export default function Login() {
  const navigate = useNavigate();
  // Atualizar link depois
  const URL = 'http://localhost:3001/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  }, [email, password]);

  async function handleLogin() {
    try {
      const response = await axios.post(
        URL,
        {
          email,
          password,
        },
      );

      if (response.statusText === 'OK') {
        const { token } = response.data;
        localStorage.setItem('user', JSON.stringify(token));

        navigate('/admin', { replace: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h2>Login</h2>
      <div className="space-y-4 md:space-y-6">
        <label
          htmlFor="login-email"
          name="email"
        >
          Your Email
          <input
            type="text"
            id="login-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label
          htmlFor="login-password"
        >
          Password
          <input
            type="password"
            id="login-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>

        <p className="mx-5 text-sm text-red-500">{ emailError || passwordError }</p>
        <button
          disabled={ (emailError || passwordError || !password) }
          onClick={ () => handleLogin() }
        >
          Login
        </button>
      </div>
    </section>
  );
}
