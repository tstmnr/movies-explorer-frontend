import './HamburgerMenu.css'
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

function  HamburgerMenu({ isHamburgerMenu, isOpenHamburgerMenu, onClose }) {

  return (
    <div className={`hamburger-menu ${isOpenHamburgerMenu ? 'hamburger-menu_active' : ''}`}>
      <nav className='hamburger-menu__nav'>
        <button
          className='hamburger-menu__button-close'
          onClick ={onClose}
          type='button'
          aria-label='Закрыть боковое меню'
        >
        </button>
        <div className='hamburger-menu__wrapper'>
          <Navigation isHamburgerMenu={isHamburgerMenu} />
          <Account />
        </div>
      </nav>
      <div className='hamburger-menu_overlay'>
      </div>
    </div>
  );
}

export default HamburgerMenu;
