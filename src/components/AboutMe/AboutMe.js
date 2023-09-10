import './AboutMe.css';
import avatar from '../../images/avatar.png'

function AboutMe({ studentRef }) {
  return (
    <section className='student' ref={studentRef}>
      <div className='student__content'>
        <h2 className='student__title'>Студент</h2>
        <div className='student__line'></div>
        <div className='student__info'>
          <h3 className='student__name'>Евгений</h3>
          <p className='student__about'>Фронтенд-разработчик, 31 год</p>
          <p className='student__description'>Начал свой путь в IT с изучения языка Java на сайте JavaRush, но в итоге понял, что хочу видеть
результат своей работы здесь и сейчас, поэтому выбрал фронтенд-разработку. Сейчас закончил
обучение в Яндекс.Практикум по специальности «Веб-разработчик». На данном курсе приобрел
навыки работы с React, Node.js, JS, MongoDB, HTML, CSS, БЭМ, Webpack, Babel, Eslint. В планах
изучение Typescript, Redux.
Ищу работу в компании с открытой культурой общения, с возможностью профессионального роста
и развития.
Мои сильные стороны - это коммуникабельность, целеустремленность, открытость и быстрая
обучаемость, не боюсь сложных задач. Умею находить ответы на поставленные вопросы.</p>
          <a className='student__link' href='https://github.com/tstmnr' target='_blank' rel='noreferrer'>Github</a>
          <img className='student__avatar' src={avatar} alt='Фотография студента'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
