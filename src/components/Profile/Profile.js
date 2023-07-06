import { React, useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ isEditable, handleLogout, handleEditProfile, handleChangeProfileData }) {

  const currentUser = useContext(CurrentUserContext);

  const [changeName, setChangeName] = useState(currentUser.name)
  const [changeEmail, setChangeEmail] = useState(currentUser.email)
  const [buttonText, setButtonText] = useState('Сохранить');

  useEffect(() => {
    setChangeName(currentUser.name);
    setChangeEmail(currentUser.email);
    setButtonText('Сохранить');
  }, [currentUser, isEditable]);

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setChangeEmail(e.target.value);
  }

  const logOut = (e) => {
    handleLogout();
  }

  const editProfile = () => {
    handleEditProfile();
  }

  const submitForm = (e) => {
    setButtonText('Сохранение...');
    handleChangeProfileData(e, {
      name: changeName,
      email: changeEmail,
    });
  }

  return (
    <main className='profile'>
      <div className='profile__content'>
        <div className='profile__wrapper'>
          <h1 className='profile__title'>Привет, {currentUser.name || 'Виталий'}!</h1>
          <form className='profile__form' onSubmit={submitForm}>
            <div className='profile__form-wrapper'>
              <label className='profile__label'>
                Имя
                <input
                  className='profile__input'
                  placeholder={currentUser.name || 'Виталий'}
                  required
                  disabled={!isEditable}
                  name='name'
                  onChange={handleChangeName}
                />
              </label>
              <div className='profile__line'></div>
              <label className='profile__label'>
                E-mail
                <input
                  className='profile__input'
                  placeholder={currentUser.email || 'pochta@yandex.ru'}
                  required
                  disabled={!isEditable}
                  name='email'
                  onChange={handleChangeEmail}
                />
              </label>
            </div>
            {isEditable &&
              <button className='profile__button' type='submit'>{buttonText}</button>
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
