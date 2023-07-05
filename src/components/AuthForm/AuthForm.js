import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({ handleRegister, title }) {


  const [changeName, setChangeName] = useState('');
  const [changeEmail, setChangeEmail] = useState('');
  const [changePassword, setChangePassword] = useState('');

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setChangeEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setChangePassword(e.target.value);
  }

  const handleSubmit = (e) => {
    handleRegister(e, {
      name: changeName,
      email: changeEmail,
      password: changePassword,
    });
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <Logo />
      <h1 className='auth-form__title'>{title}</h1>
      <label className='register__label'>
            Имя
            <br />
            <input
              className='register__input'
              type='text'
              name='username'
              value={changeName || ''}
              onChange={handleChangeName}
            />
          </label>
          <label className='register__label'>
            E-mail
            <br />
            <input
              className='register__input'
              type='email'
              name='email'
              value={changeEmail || ''}
              onChange={handleChangeEmail}
            />
          </label>
          <label className='register__label'>
            Пароль
            <br />
            <input
              className='register__input'
              type='password'
              name='password'
              value={changePassword || ''}
              onChange={handleChangePassword}
            />
          </label>
    </form>
  );
}

export default AuthForm;
