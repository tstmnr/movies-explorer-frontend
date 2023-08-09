import { React, useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

import './Register.css';
import Logo from '../Logo/Logo';

function Register({ handleRegister, submitError, setSubmitError, loggedIn, blockedInputandSubmit }) {

  const [changeName, setChangeName] = useState('');
  const [changeEmail, setChangeEmail] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('Минимальная длина поля "Имя" - 2');
  const [emailError, setEmailError] = useState('Поле "E-mail" должно быть заполнено');
  const [passwordError, setPasswordError] = useState('Поле "Пароль" должно быть заполнено');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
    if (e.target.value.length >= 2) {
      if (e.target.value.length <= 30) {
        setNameError('');
      } else {
        setNameError('Максимальная длина поля "Имя" - 30');
      }
    } else {
      setNameError('Минимальная длина поля "Имя" - 2');
    }
  }

  const handleChangeEmail = (e) => {
    setSubmitError('');
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
      case 'username':
        setNameDirty(true)
        break
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
    handleRegister(e, {
      name: changeName,
      email: changeEmail,
      password: changePassword,
    });
  }

  return loggedIn
    ? (
      <Navigate to='/' replace />
    )
    : (
    <section className='register'>
      <div className='register__content'>
        <div className='register__logo'>
          <Logo />
        </div>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <div className='register__form-wrapper'>
            <label className='register__label'>
              Имя
              <br />
              <input
                className={`register__input ${nameDirty && nameError ? 'register__input_error_active' : ''}`}
                type='text'
                name='username'
                value={changeName || ''}
                onChange={handleChangeName}
                placeholder='Имя'
                disabled={blockedInputandSubmit}
                onBlur={(e) => blurHandler(e)}
              />
            </label>
            <span className={`register__error ${nameDirty && nameError ? 'register__error_active' : ''}`}>{`${nameDirty && nameError ? nameError : ''}`}</span>
            <label className='register__label'>
              E-mail
              <br />
              <input
                className={`register__input ${emailDirty && emailError ? 'register__input_error_active' : ''}`}
                type='text'
                name='email'
                value={changeEmail || ''}
                onChange={handleChangeEmail}
                placeholder='E-mail'
                disabled={blockedInputandSubmit}
                onBlur={(e) => blurHandler(e)}
              />
            </label>
            <span className={`register__error ${emailDirty && emailError ? 'register__error_active' : ''}`}>{`${emailDirty && emailError ? emailError : ''}`}</span>
            <label className='register__label'>
              Пароль
              <br />
              <input
                className={`register__input ${passwordDirty && passwordError ? 'register__input_error_active' : ''}`}
                type='password'
                name='password'
                value={changePassword || ''}
                onChange={handleChangePassword}
                placeholder='Пароль'
                disabled={blockedInputandSubmit}
                onBlur={(e) => blurHandler(e)}
              />
            </label>
            <span className={`register__error ${passwordDirty && passwordError ? 'register__error_active' : ''}`}>{`${passwordDirty && passwordError ? passwordError : ''}`}</span>
          </div>
          <span className='register__submit-error'>{submitError ? `${submitError}` : ''}</span>
          <button disabled={!formValid || blockedInputandSubmit} className='register__button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__info'>
          Уже зарегистрированы?{' '}
          <Link className='register__signin' to='/signin'>
             Войти
          </Link>
        </p>
      </div>
    </section>
    )
}

export default Register;
