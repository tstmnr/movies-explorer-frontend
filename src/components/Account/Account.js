import { Link } from "react-router-dom";

import './Account.css';

function Account() {
  return (
    <div className='account'>
      <Link className='account__link' to='/profile'>
        Аккаунт
        <div className='account__icon'></div>
      </Link>
    </div>
  );
}

export default Account;
