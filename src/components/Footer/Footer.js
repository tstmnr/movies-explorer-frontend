import './Footer.css';

function Footer() {
    return (
      <div className='footer'>
        <div className='footer__content'>
          <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className='footer__line'></div>
          <div className='footer__wrapper'>
            <p className='footer__copyright'>© 2023. Евгений</p>
            <nav className='footer__nav'>
              <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
              <a className='footer__link' href='https://github.com/tstmnr'>Github</a>  
            </nav>
          </div>
        </div>
      </div>
    );
  }
  
export default Footer;