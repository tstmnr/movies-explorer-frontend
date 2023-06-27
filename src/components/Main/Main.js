import { useRef } from 'react';

import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

  const projectRef = useRef(null);
  const techsRef = useRef(null);
  const studentRef = useRef(null);

  const focusOnRef = (ref) => {
    ref.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Promo />
      <NavTab
        focusOnRef={focusOnRef}
        projectRef={projectRef}
        techsRef={techsRef}
        studentRef={studentRef}
      />
      <AboutProject
        projectRef={projectRef}
      />
      <Techs
        techsRef={techsRef}
      />
      <AboutMe
        studentRef={studentRef}
      />
      <Portfolio />
    </>
  );
}

export default Main;
