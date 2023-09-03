import './AboutProject.css';

function AboutProject({ projectRef }) {
  return (
    <section className='about' ref={projectRef}>
      <div className='about__content'>
        <h2 className='about__title'>О проекте</h2>
        <div className='about__line'></div>
        <div className='about__deadline'>
          <h3 className='about__description-title about__description-title_type_stage'>Дипломный проект включал 5 этапов</h3>
          <h3 className='about__description-title about__description-title_type_time'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__description about__description_type_work'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className='about__description about__description_type_deadline'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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
