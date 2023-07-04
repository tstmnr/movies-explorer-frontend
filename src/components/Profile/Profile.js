import { React, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ handleLogout }) {

  const currentUser = useContext(CurrentUserContext);

  const logOut = (e) => {
    handleLogout();
  }

  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__title'>Привет, {currentUser.name || 'Виталий'}!</h2>
        <form className='profile__form'>
            <label className='profile__label'>
              Имя
              <input
                className='profile__input'
                placeholder={currentUser.name || 'Виталий'}
              />
            </label>
            <div className='profile__line'></div>
            <label className='profile__label'>
              E-mail
              <input
                className='profile__input'
                placeholder={currentUser.name || 'pochta@yandex.ru'}
              />
            </label>
          <span className='profile__input-error'></span>
          <button className='profile__button-edit'>Редактировать</button>
        </form>
        <button className='profile__button-logout' onClick={logOut}>Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
