import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import Logo from '../Logo/Logo';

function Register({ handleRegister }) {

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
    <section className='register'>
      <div className='register__content'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
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
              placeholder='E-mail'
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
              placeholder='Пароль'
            />
          </label>
          <button className='register__button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__info'>
          Уже зарегистрированы?
          <Link className='register__signin' to='/signin'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
