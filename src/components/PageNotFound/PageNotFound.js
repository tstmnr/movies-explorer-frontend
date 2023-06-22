import { useNavigate } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  const navigate = useNavigate();

  function goBack() {
      navigate(-1);
  }

  return (
    <div className='not-found'>
      <h3 className='not-found__title'>
       <span className='not-found__error'>404</span><br/>
       Страница не найдена
      </h3>
      <button className='not-found__link' onClick={goBack}>Назад</button>
    </div>
  )
}

export default PageNotFound;
