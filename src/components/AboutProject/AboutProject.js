import './AboutProject.css';

function AboutProject({ projectRef }) {
  return (
    <section className='about' ref={projectRef}>
      <div className='about__content'>
        <h2 className='about__title'>О проекте</h2>
        <div className='about__line'></div>
        <div className='about__deadline'>
          <h3 className='about__description-title grid-box1'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about__description-title grid-box2'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description grid-box3'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about__description grid-box4'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className='about__timeline'>
          <div className='about__one'>1 неделя</div>
          <div className='about__four'>4 недели</div>
          <p className='about__dev'>Back-end</p>
          <p className='about__dev'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;