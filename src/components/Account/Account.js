import { Link } from "react-router-dom";

import './Account.css';

function Account() {
  return (
    <div className='account'>
      <span className='account__text'>Аккаунт</span>
      <Link className='account__link' to='/profile'>
      </Link>
    </div>
  );
}

export default Account;
