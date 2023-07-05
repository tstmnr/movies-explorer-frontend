import { React, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ handleLogout }) {

  const currentUser = useContext(CurrentUserContext);

  const logOut = (e) => {
    handleLogout();
  }

  return (
    <main className='profile'>
      <div className='profile__content'>
        <div className='profile__wrapper'>
          <h1 className='profile__title'>Привет, {currentUser.name || 'Виталий'}!</h1>
          <form className='profile__form'>
            <label className='profile__label'>
              Имя
              <input
                className='profile__input'
                placeholder={currentUser.name || 'Виталий'}
                required
                disabled={true}
              />
            </label>
            <div className='profile__line'></div>
            <label className='profile__label'>
              E-mail
              <input
                className='profile__input'
                placeholder={currentUser.name || 'pochta@yandex.ru'}
                required
                disabled={true}
              />
            </label>
          </form>
        </div>
        <div className='profile__buttons'>
          <button className='profile__button-edit'>Редактировать</button>
          <button className='profile__button-logout' onClick={logOut}>Выйти из аккаунта</button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
