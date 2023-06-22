import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <div className='login__content'>
        <Logo />
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <label className='login__label'>
            E-mail
            <br />
            <input className='login__input' type='email' name='loge-mail' />
          </label>
          <label className='login__label'>
            Пароль
            <br />
            <input className='login__input' type='password' name='log-password' />
          </label>
          <button className='login__button' type='submit'>Войти</button>
        </form>
        <p className='login__info'>
          Ещё не зарегистрированы?
          <Link className='login__signup' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
