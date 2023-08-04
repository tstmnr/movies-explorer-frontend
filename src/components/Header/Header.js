import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

function Header({ loggedIn, onHamburgerClick, isOpenHamburgerMenu }) {

  const location = useLocation();

  return (
    <header className={`header ${location.pathname !== '/' ? 'header_background_white' : ''}`}>
      <div className='header__content'>
        {loggedIn
          ?
          <>
            <Logo />
              {!isOpenHamburgerMenu &&
                <div className='header__navigation'>
                  <Navigation />
                  <Account />
                </div>
              }
              <button
                className='header__button-menu'
                type='button'
                onClick={onHamburgerClick}
                aria-label='Меню сайта'
              >
              </button>
            </>
          :
          <>
            <Logo />
            <nav className='header__menu'>
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
            </nav>
          </>
        }
        {/*location.pathname !== '/'
        ?
        <>
          <Logo />
          {!isOpenHamburgerMenu &&
            <div className='header__navigation'>
              <Navigation />
              <Account />
            </div>
          }
          <button
            className='header__button-menu'
            type='button'
            onClick={onHamburgerClick}
            aria-label='Меню сайта'
          ></button>
        </>
        :
        <>
          <Logo />
          {loggedIn
          ?
            <Account />
          :
            <nav className='header__menu'>
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
            </nav>
          }
        </>
        */}
      </div>
    </header>
  );
}

export default Header;
