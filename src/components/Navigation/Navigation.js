import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation() {

  const location = useLocation();

  return (
    <nav className='navigation'>
      <ul className='navigation__menu'>
        <li className='navigation__links'>
          <Link className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link_active' : ''}`} to='/movies'>Фильмы</Link>
        </li>
        <li className='navigation__links'>
          <Link className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''}`} to='/saved-movies'>Сохраненные фильмы</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
