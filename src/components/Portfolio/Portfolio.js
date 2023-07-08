import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__content'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <ul className='portfolio__items'>
          <li className='portfolio__item'>
            <h5 className='portfolio__project'>Статичный сайт</h5>
            <a className='portfolio__link' href='https://tstmnr.github.io/russian-travel/index'> </a>
          </li>
          <li className='portfolio__item'>
            <h5 className='portfolio__project'>Адаптивный сайт</h5>
            <a className='portfolio__link' href='https://tstmnr.github.io/russian-travel/index'> </a>
          </li>
          <li className='portfolio__item'>
            <h5 className='portfolio__project'>Одностраничное приложение</h5>
            <a className='portfolio__link' href='https://tstmnr.github.io/russian-travel/index'> </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
