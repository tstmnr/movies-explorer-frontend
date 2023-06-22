import { Link } from "react-router-dom";

import './Account.css';
import buttonIcon from '../../images/button-icon.svg'

function Account() {
  return (
    <div className='account'>
      <span className='account__text'>Аккаунт</span>
      <Link className='account__link' to='/profile'>
        <button className='account__button'type='button'>
          <img className='account__button-image' src={buttonIcon} alt='Аккаунт' />
        </button>
      </Link>
    </div>
  );
}

export default Account;
