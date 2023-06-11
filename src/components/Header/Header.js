import './Header.css';
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__wrapper'>
          <img className='header__logo' src={logo} alt='Логотип сайта, буква S в синем круге'></img>
          <ul className='header__items'>
            <li className='header__item'>
              <a className='header__register-link' href='/signin'>Регистрация</a>
            </li>
            <li className='header__item'>
              <a className='header__login-link' href='/signup'>
                <button className='header__button' type='button'>Войти</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
