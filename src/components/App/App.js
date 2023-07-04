import { React, useState, useEffect }from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Footer from '../Footer/Footer'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile'
import PageNotFound from '../PageNotFound/PageNotFound';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    loggedIn &&
    //отправляем запрос на получение данных пользователя и загрузки карточек фильмов
    setCurrentUser({
      name: 'Виталий',
      email: 'pochta@yandex.ru',
      _id: '12345678976543456788'
    });
  }, [loggedIn]);

  function handleRegister(e, data) {
    e.preventDefault();
    //создание запроса на регистрацию, если успешно -переходим на страницу /signin
    console.log(data);
    navigate('/signin', { replace: true });
  }

  function handleLogin(e, data) {
    e.preventDefault();
    //создание запроса на логин, если успешно - логинимся и переходим на страницу /movies
    console.log(data);
    setCurrentUser({
      name: 'Виталий',
      email: 'pochta@yandex.ru',
      _id: '12345678976543456788'
    });
    setLoggedIn(true);
    navigate('/movies', { replace: true });
  }

  function handleLogout() {
    //отправка запроса на затирку куков
    setLoggedIn(false);
  }

  function onHamburgerClick() {
    setIsOpenHamburgerMenu(true);
  }

  function handleCloseHamburgerMenu() {
    setIsOpenHamburgerMenu(false);
  }


  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header loggedIn={loggedIn} onHamburgerClick={onHamburgerClick} isOpenHamburgerMenu={isOpenHamburgerMenu} />
              <Outlet />
              {location.pathname !== '/profile' && <Footer />}
            </>
          }
        >
          <Route
            index
            element={
              <Main />
            }
          />
          <Route
            path='movies'
            element={
              <Movies />
            }
          />
          <Route
            path='saved-movies'
            element={
              <SavedMovies />
            }
          />
          <Route
            path='profile'
            element={
              <Profile handleLogout={handleLogout} />
            }
          />
        </Route>
        <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
        <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <HamburgerMenu
        isHamburgerMenu={true}
        isOpenHamburgerMenu={isOpenHamburgerMenu}
        onClose={handleCloseHamburgerMenu}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
