import './NavTab.css';

function NavTab() {
  return (
    <section className='navtab'>
      <nav className='navtab__content'>
        <ul className='navtab__nav-items'>
          <li className='navtab__nav-item navtab__nav-item_active'><a className='navtab__nav-link' href='http://sdasd.ru'>О проекте</a></li>
          <li className='navtab__nav-item'><a className='navtab__nav-link' href='http://sdasd.ru'>Технологии</a></li>
          <li className='navtab__nav-item'><a className='navtab__nav-link' href='http://sdasd.ru'>Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
