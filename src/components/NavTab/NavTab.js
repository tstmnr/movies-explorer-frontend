import './NavTab.css';

function NavTab({ focusOnRef, projectRef, techsRef, studentRef }) {

  const handleFocus = (e) => {
    switch (e.target.id) {
      case 'projectRef':
        focusOnRef(projectRef);
        break;
      case 'techsRef':
        focusOnRef(techsRef);
        break;
      case 'studentRef':
        focusOnRef(studentRef);
        break;
      default:
        focusOnRef(projectRef);
    }
  }

  return (
    <section className='navtab'>
      <nav className='navtab__content'>
        <ul className='navtab__nav-items'>
          <li className='navtab__nav-item' id='projectRef' type='button' onClick={handleFocus}>
            О проекте
          </li>
          <li className='navtab__nav-item' id='techsRef' type='button' onClick={handleFocus}>
            Технологии
          </li>
          <li className='navtab__nav-item' id='studentRef' type='button' onClick={handleFocus}>
            Студент
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
