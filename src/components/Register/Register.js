import { Link } from 'react-router-dom';

import './Register.css';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <section className='register'>
      <div className='register__content'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <label className='register__label'>
            Имя
            <br />
            <input className='register__input' type='text' name='regname' />
          </label>
          <label className='register__label'>
            E-mail
            <br />
            <input className='register__input' type='email' name='regemail' />
          </label>
          <label className='register__label'>
            Пароль
            <br />
            <input className='register__input' type='password' name='regpassword' />
          </label>
          <button className='register__button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__info'>
          Уже зарегистрированы?
          <Link className='register__signin' to='/signin'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
