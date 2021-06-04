import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'trigma@login.com';
  const adminPassword = 'qwerty';

  const [email, setEmail] = useState('trigma@login.com');
  const [password, setPassword] = useState('qwerty');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true
          });
        }
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="trigma@login.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
