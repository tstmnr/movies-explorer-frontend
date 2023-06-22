import './AboutMe.css';
import avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className='student'>
      <div className='student__content'>
        <h2 className='student__title'>Студент</h2>
        <div className='student__line'></div>
        <div className='student__info'>
          <div className='student__wrapper'>
            <h3 className='student__name'>Виталий</h3>
            <p className='student__about'>Фронтенд-разработчик, 30 лет</p>
            <p className='student__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='student__link' href='https://github.com/tstmnr'>Github</a>
          </div>
          <img className='student__avatar' src={avatar} alt='Фотография студента'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
