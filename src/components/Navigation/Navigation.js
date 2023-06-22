import { Link } from "react-router-dom";

import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__menu'>
        <li className='navigation__links'>
          <Link className='navigation__link' to='/movies'>Фильмы</Link>
        </li>
        <li className='navigation__links'>
          <Link className='navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
