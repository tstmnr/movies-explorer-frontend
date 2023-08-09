import { React, useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { UPDATE_SUCCESS_MESSAGE } from '../../utils/constants';

import './Profile.css';

function Profile({
  isEditable,
  handleLogout,
  handleEditProfile,
  handleChangeProfileData,
  submitError,
  setSubmitError }) {

  const currentUser = useContext(CurrentUserContext);

  const [changeName, setChangeName] = useState(currentUser.name)
  const [changeEmail, setChangeEmail] = useState(currentUser.email)
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setChangeName(currentUser.name);
    setChangeEmail(currentUser.email);
  }, [currentUser, isEditable]);

  useEffect(() => {
    if (nameError || emailError ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError]);

  useEffect(() => {
    if (changeName === currentUser.name || changeEmail === currentUser.email) {
      setFormValid(false);
    } else {
      setFormValid(true)
    }
  }, [changeName, changeEmail])

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

  const logOut = (e) => {
    handleLogout();
  }

  const editProfile = () => {
    handleEditProfile();
    setFormValid(false);
  }

  const submitForm = (e) => {
    handleChangeProfileData(e, {
      name: changeName,
      email: changeEmail,
    });
  }

  return (
    <main className='profile'>
      <div className='profile__content'>
        <div className='profile__wrapper'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <form className='profile__form' onSubmit={submitForm}>
            <div className='profile__form-wrapper'>
              <label className='profile__label'>
                Имя
                <input
                className={`profile__input ${nameError ? 'profile__input_error_active' : ''}`}
                  placeholder='Введите Имя'
                  required
                  disabled={!isEditable}
                  name='name'
                  onChange={handleChangeName}
                  value={changeName || ''}
                />
              </label>
              {(nameError)
              ? <span className='profile__error'>{nameError}</span>
              : ''
              }
              <div className='profile__line'></div>
              <label className='profile__label'>
                E-mail
                <input
                className={`profile__input ${emailError ? 'profile__input_error_active' : ''}`}
                  placeholder='Введите E-mail'
                  required
                  disabled={!isEditable}
                  name='email'
                  onChange={handleChangeEmail}
                  value={changeEmail || ''}
                />
              </label>
              {(emailError)
              ? <span className='profile__error'>{emailError}</span>
              : ''
              }
            </div>
            <span className={submitError === UPDATE_SUCCESS_MESSAGE ? 'profile__submit-success' : 'profile__submit-error'}>{submitError ? `${submitError}` : ''}</span>
            {isEditable &&
              <button disabled={!formValid} className={formValid ? 'profile__button' : 'profile__disabled-button'} type='submit'>Сохранить</button>
            }
          </form>
        </div>
        <div className='profile__buttons'>
          {!isEditable &&
            <>
              <button className='profile__button-edit' onClick={editProfile} type='button'>Редактировать</button>
              <button className='profile__button-logout' onClick={logOut} type='button'>Выйти из аккаунта</button>
            </>
          }
        </div>
      </div>
    </main>
  );
}

export default Profile;
