import { useNavigate } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound ({ loggedIn }) {
  const navigate = useNavigate();

  function goBack() {
    if (loggedIn) {
      navigate(-2);
    } else {
      navigate(-1);
    }
  }

  return (
    <main className='not-found'>
      <section className='not-found__content'>
        <div className='not-found__wrapper'>
          <p className='not-found__error'>404</p>
          <h1 className='not-found__title'>Страница не найдена</h1>
        </div>
        <button className='not-found__link' onClick={goBack} type='button'>Назад</button>
      </section>
    </main>
  )
}

export default PageNotFound;
