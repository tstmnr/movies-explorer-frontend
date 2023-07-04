import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Login.css'

function Login({ handleLogin }) {

  const [changeEmail, setChangeEmail] = useState('');
  const [changePassword, setChangePassword] = useState('');

  const handleChangeEmail = (e) => {
    setChangeEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setChangePassword(e.target.value);
  }

  const handleSubmit = (e) => {
    handleLogin(e, {
      email: changeEmail,
      password: changePassword,
    });
  }

  return (
    <section className='login'>
      <div className='login__content'>
        <Logo />
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' onSubmit={handleSubmit}>
          <label className='login__label'>
            E-mail
            <input
            className='login__input'
            type='email'
            name='email'
            value={changeEmail || ''}
            onChange={handleChangeEmail}
            />
          </label>
          <label className='login__label'>
            Пароль
            <input
              className='login__input'
              type='password'
              name='password'
              value={changePassword || ''}
              onChange={handleChangePassword}
            />
          </label>
          <button className='login__button' type='submit'>Войти</button>
        </form>
        <p className='login__info'>
          Ещё не зарегистрированы?
          <Link className='login__signup' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
