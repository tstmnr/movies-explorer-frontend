import './HamburgerMenu.css'
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';
import Overlay from '../Overlay/Overlay';

function  HamburgerMenu({ isHamburgerMenu, isOpenHamburgerMenu, onClose }) {

  return (
    <Overlay isOpenHamburgerMenu={isOpenHamburgerMenu}>
      <div className={`hamburger-menu ${isOpenHamburgerMenu ? 'hamburger-menu_active' : ''}`}>
        <div className='hamburger-menu__content'>
          <button
            className='hamburger-menu__button-close'
            onClick ={onClose}
            type='button'
            aria-label='Закрыть боковое меню'
          >
          </button>
          <nav className='hamburger-menu__nav'>
            <Navigation isHamburgerMenu={isHamburgerMenu} />
            <Account />
          </nav>
        </div>
      </div>
    </Overlay>
  );
}

export default HamburgerMenu;
