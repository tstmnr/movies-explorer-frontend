import './Techs.css';

function Techs({ techsRef }) {
  return (
    <section className='techs' ref={techsRef}>
      <div className='techs__content'>
          <h2 className='techs__title'>Технологии</h2>
          <div className='techs__line'></div>
          <h3 className='techs__about'>7 технологий</h3>
          <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__items'>
            <li className='techs__item'>
              HTML
            </li>
            <li className='techs__item'>
              CSS
            </li>
            <li className='techs__item'>
              JS
            </li>
            <li className='techs__item'>
              React
            </li>
            <li className='techs__item'>
              Git
            </li>
            <li className='techs__item'>
              Express.js
            </li>
            <li className='techs__item'>
              mongoDB
            </li>
          </ul>
      </div>
    </section>
  );
}

export default Techs;
