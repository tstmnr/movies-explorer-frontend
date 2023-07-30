/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState }from 'react';
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
import ProtectedRouterElement from '../ProtectedRouteElement/ProtectedRouteElement';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //проверяет залогинен пользователь или нет
  const [loginData, setLoginData] = useState({}); //записывает эмейл и пароль, чтобы сразу после регистрации залогиниться
  const [currentUser, setCurrentUser] = useState({}); // устанавливаем значения для текущего пользователя
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);
  const [isEditable, setIsEditable] = useState(false); //проверяет можно ли редактировать данные пользователя
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [keyword, setKeyword] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
      .then(([userData, savedMovies]) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
        setSavedMoviesList(savedMovies);
        localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
      })
      .catch((err) => {
        console.log(err);
      })
    } else {

    }
  }, [loggedIn])

  useEffect(() => {
    localStorage.getItem('isLogged') &&
    mainApi.getUserInfo()
      .then((userData) => {
        if (!userData) {
          navigate('/signin', { replace: true });
        }
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
        setLoggedIn(true);
        navigate(0);
      })
      .catch(err => {
        console.log(err);
      })
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/movies' && JSON.parse(localStorage.getItem('movies')) !== null && JSON.parse(localStorage.getItem('movies')).length > 0) {
      setMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('movies'))));
    }
    if (location.pathname === '/saved-movies' && JSON.parse(localStorage.getItem('saved-movies')) !== null && JSON.parse(localStorage.getItem('saved-movies')).length > 0) {
      setMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('saved-movies'))));
    }
  }, [isChecked]);

  function handleRegister(e, data) {
    e.preventDefault();
    mainApi.registration(data)
      .then((res) => {
        setLoginData({
          email: data.email,
          password: data.password,
        });
        handleLogin(e, loginData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginData({});
      })
  }

  function handleLogin(e, data) {
    e.preventDefault();
    mainApi.authentication(data)
      .then((res) => {
        localStorage.setItem('isChecked', isChecked);
        localStorage.setItem('isLogged', true);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    mainApi.logout()
    .then(() => {
      setLoggedIn(false);
      navigate('/', { replace: true });
      localStorage.clear();
    })
    .catch((err) =>
      console.log(err)
    )
  }

  function handleEditProfile() {
    setIsEditable(!isEditable);
  }

  function handleChangeProfileData(e, data) {
    e.preventDefault();
    mainApi.updateUserData(data)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
        setIsEditable(!isEditable);
      })
      .catch((err) =>
        console.log(err)
      )
  }

  function onHamburgerClick() {
    setIsOpenHamburgerMenu(true);
  }

  function handleCloseHamburgerMenu() {
    setIsOpenHamburgerMenu(false);
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    moviesApi.getMoviesCards()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(filterMoviesByKeyword(movies)));
        setMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('movies'))));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      })
  }

  function filterMoviesByKeyword(moviesArray) {
    if (isChecked) {
      console.log('Фильтрация при true')
      return moviesArray.filter((movie) => ((movie.nameRU + movie.nameEN).includes(keyword) && (movie.duration < 40)));
    } else {
      console.log('Фильтрация при false')
      return moviesArray.filter((movie) => (movie.nameRU + movie.nameEN).includes(keyword));
    }
  }

  function handleLikeCard(card, isSaved) {
    if (isSaved) {
      const movie = savedMoviesList.find((savedMovie) => savedMovie.movieId === card.id || savedMovie.movieId === card.movieId);
      handleCardDelete(movie)
    } else {
      mainApi.saveMovie(card)
      .then((savedMovie) => {
        localStorage.setItem('saved-movies', JSON.stringify([savedMovie, ...savedMoviesList]));
        setSavedMoviesList(JSON.parse(localStorage.getItem('saved-movies')));
      })
    }
  }

  function handleCardDelete(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        setSavedMoviesList((state) =>
          state.filter((movie) => movie._id !== card._id)
        );
        localStorage.setItem('saved-movies', JSON.stringify(savedMoviesList));
      })
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
                <ProtectedRouterElement
                  path='movies'
                  loggedIn={loggedIn}
                  component={Movies}
                  moviesList={moviesList}
                  onCardLike={handleLikeCard}
                  searchMovies={handleSearchMovies}
                  keyword={keyword}
                  setKeyword={setKeyword}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  savedMoviesList={savedMoviesList}
                />
              }
            />
            <Route
              path='saved-movies'
              element={
                <ProtectedRouterElement
                  path='saved-movies'
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  savedMoviesList={savedMoviesList}
                  onCardDelete={handleCardDelete}
                />
              }
            />
            <Route
              path='profile'
              element={
                <ProtectedRouterElement
                  path='profile'
                  loggedIn={loggedIn}
                  component={Profile}
                  isEditable={isEditable}
                  handleLogout={handleLogout}
                  handleEditProfile={handleEditProfile}
                  handleChangeProfileData={handleChangeProfileData}
                />
              }
            />
          </Route>
          <Route
            path='/signin'
            element={
              <Login
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                handleRegister={handleRegister}
              />
            }
          />
          <Route
            path='*'
            element={
              <PageNotFound />
            }
          />
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
