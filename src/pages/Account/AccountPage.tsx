import React, { useState } from 'react';
import './AccountPage.scss';

interface FormState {
  username: string;
  email: string;
  password: string;
}

const AccountPage: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');
  const [loginForm, setLoginForm] = useState<FormState>({
    username: '',
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState<FormState>({
    username: '',
    email: '',
    password: ''
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', loginForm);

  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', registerForm);
 
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="/images/headerImage2.png" alt="Featured" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span 
                  className={activeForm === 'login' ? 'active' : ''} 
                  onClick={() => setActiveForm('login')}
                >
                  Login
                </span>
                <span 
                  className={activeForm === 'register' ? 'active' : ''} 
                  onClick={() => setActiveForm('register')}
                >
                  Register
                </span>
                <hr className={`indicator ${activeForm === 'register' ? 'right' : 'left'}`} />
              </div>
              
              <form 
                id="loginForm" 
                className={activeForm === 'login' ? 'active' : 'inactive'}
                onSubmit={handleLoginSubmit}
              >
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  value={loginForm.username}
                  onChange={handleLoginChange}
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={loginForm.password}
                  onChange={handleLoginChange}
                />
                <button type="submit" className="btn">Login</button>
                <a href="#forgot-password">Forgot password</a>
              </form>

              <form 
                id="regForm" 
                className={activeForm === 'register' ? 'active' : 'inactive'}
                onSubmit={handleRegisterSubmit}
              >
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  value={registerForm.username}
                  onChange={handleRegisterChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                />
                <button type="submit" className="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;