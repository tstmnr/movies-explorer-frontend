import './AboutMe.css';
import avatar from '../../images/avatar.png'

function AboutMe({ studentRef }) {
  return (
    <section className='student' ref={studentRef}>
      <div className='student__content'>
        <h2 className='student__title'>Студент</h2>
        <div className='student__line'></div>
        <div className='student__info'>
          <h3 className='student__name'>Виталий</h3>
          <p className='student__about'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__description'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a className='student__link' href='https://github.com/tstmnr' target='_blank' rel='noreferrer'>Github</a>
          <img className='student__avatar' src={avatar} alt='Фотография студента'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
