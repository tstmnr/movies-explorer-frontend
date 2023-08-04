{
  location.pathname === '/'
  ?
  loggedIn &&
  <>
    <Logo />
    {!isOpenHamburgerMenu &&
      <>
        <div className='header__navigation'>
          <Navigation />
          <Account />
        </div>
        <Account />
      </>
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
