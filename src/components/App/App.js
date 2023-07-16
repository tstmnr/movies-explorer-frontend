import { React, useState, useEffect }from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';
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
import api from '../../utils/MoviesApi';
import auth from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [movieCards, setMovieCards] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggedIn);
    loggedIn &&
    Promise.all([auth.getUserInfo(), api.getMoviesCards()])
      .then(([userData, movieCardsData]) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
          _id: userData._id
        });
        setMovieCards(movieCardsData);
        console.log(movieCardsData);
      })
      .finally(() => {
        console.log('block finally')
      })
  }, [loggedIn]);

  function handleRegister(e, data) {
    e.preventDefault();
    auth.registration(data)
      .then((res) => {
        console.log(res);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(e, data) {
    e.preventDefault();
    auth.authentication(data)
      .then((res) => {
        console.log(loggedIn);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    auth.logout()
    .then(() => {
      setLoggedIn(false)
      navigate('/', { replace: true })
    })
    .catch((err) =>
      console.log(err)
    )
  }

  function handleEditProfile() {
    setIsEditable(!isEditable);
  }

  function handleChangeProfileData(e, userData) {
    e.preventDefault();
    //отправка запроса на изменение данных пользователя
    setCurrentUser({
      name: userData.name,
      email: userData.email
    });
    setIsEditable(!isEditable);
  }

  function onHamburgerClick() {
    setIsOpenHamburgerMenu(true);
  }

  function handleCloseHamburgerMenu() {
    setIsOpenHamburgerMenu(false);
  }


  return (
    <div className='page'>
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
                <Profile isEditable={isEditable} handleLogout={handleLogout} handleEditProfile={handleEditProfile} handleChangeProfileData={handleChangeProfileData} />
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
    </div>
  );
}

export default App;
