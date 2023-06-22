import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

function Header() {

  const location = useLocation();

  return (
    <>
      {location.pathname === '/' &&
        <header className='header'>
          <div className='header__content'>
            <div className='header__wrapper'>
              <Logo />
              <ul className='header__items'>
                <li className='header__item'>
                  <Link className='header__register-link' to='/signup'>Регистрация</Link>
                </li>
                <li className='header__item'>
                  <Link className='header__login-link' to='/signin'>
                    <button className='header__button' type='button'>Войти</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      }
      {location.pathname === ('/movies', '/saved-movies') &&
        <header className='header header_background_login'>
          <div className='header__content'>
            <div className='header__wrapper'>
              <div className='header__navigation'>
                <Logo />
                <Navigation />
              </div>
              <Account />
            </div>
          </div>
        </header>
      }
    </>
  );
}

export default Header;
