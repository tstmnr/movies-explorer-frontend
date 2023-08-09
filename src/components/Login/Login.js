import { React, useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

import './Login.css';
import Logo from '../Logo/Logo';

function Login({ handleLogin, submitError, loggedIn, blockedInputandSubmit }) {

  const [changeEmail, setChangeEmail] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле "E-mail" должно быть заполнено');
  const [passwordError, setPasswordError] = useState('Поле "Пароль" должно быть заполнено');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handleChangeEmail = (e) => {
    setChangeEmail(e.target.value);

    if (!e.target.value) {
      return setEmailError('Поле "E-mail" должно быть заполнено');
    }

    const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!regExp.test(String(e.target.value).toLowerCase())) {
      setEmailError('Поле "E-mail" некорректно заполнено');
    } else {
      setEmailError('');
    }
  }

  const handleChangePassword = (e) => {
    setChangePassword(e.target.value);

    if (!e.target.value) {
      setPasswordError('Поле "Пароль" должно быть заполнено');
    } else {
      setPasswordError('');
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    handleLogin(e, {
      email: changeEmail,
      password: changePassword,
    });
  }

  return loggedIn
    ? (
      <Navigate to='/' replace />
    )
    : (
    <section className='login'>
      <div className='login__content'>
        <div className='login__logo'>
          <Logo />
        </div>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__form-wrapper'>
            <label className='login__label'>
              E-mail
              <br />
              <input
                className={`login__input ${emailDirty && emailError ? 'login__input_error_active' : ''}`}
                type='text'
                name='email'
                value={changeEmail || ''}
                onChange={handleChangeEmail}
                placeholder='E-mail'
                disabled={blockedInputandSubmit}
                onBlur={(e) => blurHandler(e)}
              />
            </label>
            <span className={`login__error ${emailDirty && emailError ? 'login__error_active' : ''}`}>{`${emailDirty && emailError ? emailError : ''}`}</span>
            <label className='login__label'>
              Пароль
              <br />
              <input
                className={`login__input ${passwordDirty && passwordError ? 'login__input_error_active' : ''}`}
                type='password'
                name='password'
                value={changePassword || ''}
                onChange={handleChangePassword}
                placeholder='Пароль'
                disabled={blockedInputandSubmit}
                onBlur={(e) => blurHandler(e)}
              />
            </label>
            <span className={`login__error ${passwordDirty && passwordError ? 'login__error_active' : ''}`}>{`${passwordDirty && passwordError ? passwordError : ''}`}</span>
          </div>
          <span className='login__submit-error'>{submitError ? `${submitError}` : ''}</span>
          <button disabled={!formValid || blockedInputandSubmit} className='login__button' type='submit'>Войти</button>
        </form>
        <p className='login__info'>
          Ещё не зарегистрированы?{' '}
          <Link className='login__signup' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login;
