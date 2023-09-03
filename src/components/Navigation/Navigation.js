import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isHamburgerMenu, isOpenHamburgerMenu }) {

  const location = useLocation();
  const navigationMenuClassName = `navigation__menu ${isOpenHamburgerMenu ? 'navigation__menu_sidebar_active' : ''}`

  return (
    <nav className='navigation'>
      <ul className={navigationMenuClassName}>
        {isHamburgerMenu &&
          <li className='navigation__links'>
            <Link className={`navigation__link ${location.pathname === '/' ? 'navigation__link_active' : ''}`} to='/'>Главная</Link>
          </li>
        }
        <>
          <li className='navigation__links'>
            <Link className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link_active' : ''}`} to='/movies'>Фильмы</Link>
          </li>
          <li className='navigation__links'>
            <Link className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''}`} to='/saved-movies'>Сохраненные фильмы</Link>
          </li>
        </>
      </ul>
    </nav>
  );
}

export default Navigation;
