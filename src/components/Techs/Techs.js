import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__content'>
          <h2 className='techs__title'>Технологии</h2>
          <div className='techs__line'></div>
          <h3 className='techs__about'>7 технологий</h3>
          <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили<br/>в дипломном проекте.</p>
          <ul className='techs__items'>
              <li className='techs__item'>
                  <div className='techs__technology'>HTML</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>CSS</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>JS</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>React</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>Git</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>Express.js</div>
              </li>
              <li className='techs__item'>
                  <div className='techs__technology'>mongoDB</div>
              </li>
          </ul>
      </div>
    </section>
  );
}

export default Techs;
