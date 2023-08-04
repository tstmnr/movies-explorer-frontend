import { Link, useLocation } from 'react-router-dom';

import './Account.css';

function Account() {

  const location = useLocation();

  const accountIconClassName = `account__icon ${location.pathname === '/' ? 'account__icon_background_grey' : ''}`;

  return (
    <div className='account'>
      <Link className='account__link' to='/profile'>
        Аккаунт
        <div className={accountIconClassName}></div>
      </Link>
    </div>
  );
}

export default Account;
