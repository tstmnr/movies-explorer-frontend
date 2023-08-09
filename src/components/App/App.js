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
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import {
  filterMoviesByKeyword,
  USER_BAD_DATA_MESSAGE,
  SIGNIN_BAD_DATA_MESSAGE,
  SIGNIN_DEFAULT_ERROR,
  SIGNUP_CONFLICT_MESSAGE,
  SIGNUP_BAD_DATA_MESSAGE,
  SIGNUP_DEFAULT_ERROR,
  UPDATE_DEFAULT_ERROR,
  MOVIES_NOT_FOUND,
  EMPTY_INPUT,
  UPDATE_SUCCESS_MESSAGE,
  SERVER_ERROR,
} from '../../utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('isLogged')) || false); //проверяет залогинен пользователь или нет
  const [currentUser, setCurrentUser] = useState({}); // устанавливаем значения для текущего пользователя
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false); //проверяем открыто ли бургер-меню
  const [isEditable, setIsEditable] = useState(false); //проверяет можно ли редактировать данные пользователя
  const [initialMoviesList, setInitialMoviesList] = useState([]); // список всех фильмов с api beatfilms
  const [savedMoviesList, setSavedMoviesList] = useState(JSON.parse(localStorage.getItem('saved-movies')) || []); // список сохраненных фильмов
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMoviesList);
  const [isPreloaderActive, setPreloaderClass] = useState(false); // вкл/выкл прелоадера
  const [searchMoviesError, setSearchMoviesError] = useState('');
  const [searchSavedMoviesError, setSearchSavedMoviesError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isMoviesShort, setIsMoviesShort] = useState(JSON.parse(localStorage.getItem('isMoviesShort')) || false);
  const [isSavedMoviesShort, setIsSavedMoviesShort] = useState(JSON.parse(localStorage.getItem('isSavedMoviesShort')) || false);
  const [blockedInputandSubmit, setBlockedInputandSubmit] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      getUserInfo();
      getSavedMovies();
    }
  }, [loggedIn]);

  function getSavedMovies() {
    mainApi.getMovies()
      .then((savedMovies) => {
        if (savedMovies) {
          localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
          setSavedMoviesList(savedMovies);
        }
      })
      .catch(() => {
        setSearchSavedMoviesError(SERVER_ERROR);
      })
  }

  function getUserInfo() {
    mainApi.getUserInfo()
    .then((userData) => {
      if (userData) {
        setCurrentUser(userData);
        setLoggedIn(true);
        setSearchMoviesError('');
        setSearchSavedMoviesError('');
        navigate(location.pathname);
      }
    })
    .catch((err) => {
      console.error(`${err}`);
    })
  }

  useEffect(() => {
    setSearchMoviesError('');

    if (isMoviesShort && filteredMovies && filteredMovies.length !== 0) {
      const keyword = localStorage.getItem('moviesSearchQuery');
      const shorts = filterMoviesByKeyword(filteredMovies, keyword, isMoviesShort);
      setFilteredMovies(shorts);

      if (shorts.length === 0) {
        setSearchMoviesError(MOVIES_NOT_FOUND);
      }
    } else if (!isMoviesShort && filteredMovies && filteredMovies.length !== 0) {
      handleSearchMovies();

    }
  }, [isMoviesShort]);

  useEffect(() => {
    setSearchSavedMoviesError('');
    const keyword = localStorage.getItem('savedMoviesSearchQuery');

    if (isSavedMoviesShort && savedMoviesList && savedMoviesList.length !== 0) {
      const savedShorts = filterMoviesByKeyword(savedMoviesList, keyword, isSavedMoviesShort);
      setFilteredSavedMovies(savedShorts);

      if (savedShorts.length === 0) {
        setSearchSavedMoviesError(MOVIES_NOT_FOUND);
      }
    } else if (!isSavedMoviesShort && savedMoviesList && savedMoviesList.length !== 0) {
      handleSearchSavedMovies();
    }
  }, [isSavedMoviesShort]);

  function showSearchInputError() {
    if (location.pathname === '/movies') {
      setSearchMoviesError(EMPTY_INPUT);
    } else if (location.pathname === '/saved-movies') {
      setSearchSavedMoviesError(EMPTY_INPUT);
    }
  }

  //функция поиска и фильтрации сохраненных фильмов
  function handleSearchMovies() {
    setBlockedInputandSubmit(true);
    setPreloaderClass(true)
    setSearchMoviesError('');
    setFilteredMovies([]);
    const keyword = localStorage.getItem('moviesSearchQuery');

    if (initialMoviesList.length === 0) {
      moviesApi.getMoviesCards()
        .then((movies) => {
          if (movies) {
            setInitialMoviesList(movies);
            let filtered = filterMoviesByKeyword(movies, keyword, isMoviesShort);

            if (filtered.length === 0) {
              setSearchMoviesError(MOVIES_NOT_FOUND);
            } else {
              localStorage.setItem('filteredMovies', JSON.stringify(filtered));
              setFilteredMovies(filtered);
            }
          }
        })
        .catch(() => {
          setSearchMoviesError(SERVER_ERROR)
        })
        .finally(() => {
          setPreloaderClass(false)
        })
    } else {
      let filtered = filterMoviesByKeyword(initialMoviesList, keyword, isMoviesShort);

      if (filtered.length === 0) {
        setSearchMoviesError(MOVIES_NOT_FOUND);
      } else {
        localStorage.setItem('filteredMovies', JSON.stringify(filtered));
        setFilteredMovies(filtered);

      }
      setBlockedInputandSubmit(false);
      setPreloaderClass(false)
    }
  }

  //функция фильтрации сохраненных фильмов
  function handleSearchSavedMovies() {
    setBlockedInputandSubmit(true);
    setPreloaderClass(true)
    setSearchSavedMoviesError('');
    setFilteredSavedMovies([]);
    const keyword = localStorage.getItem('savedMoviesSearchQuery');

    let filtered = filterMoviesByKeyword(savedMoviesList, keyword, isSavedMoviesShort);

    if (filtered.length === 0) {
      setSearchSavedMoviesError(MOVIES_NOT_FOUND);
    } else {
      localStorage.setItem('filteredSavedMovies', JSON.stringify(filtered));
      setFilteredSavedMovies(filtered);
    }

    setBlockedInputandSubmit(false);
    setPreloaderClass(false);
  }

  function handleShortsFilter() {
    setBlockedInputandSubmit(true);
    localStorage.setItem('isMoviesShort', JSON.stringify(!isMoviesShort));
    setIsMoviesShort(!isMoviesShort);
    setBlockedInputandSubmit(false);
  }

  function handleSavedShortsFilter() {
    setBlockedInputandSubmit(true);
    localStorage.setItem('isSavedMoviesShort', JSON.stringify(!isSavedMoviesShort));
    setIsSavedMoviesShort(!isSavedMoviesShort);
    setBlockedInputandSubmit(false);
  }

  // функция лайка карточки
  function handleLikeCard(card, isSaved, setIsSaved) {
    if (!isSaved) {
      mainApi.saveMovie(card)
        .then((savedMovie) => {
          if (savedMovie) {
            setSavedMoviesList([savedMovie, ...savedMoviesList]);
            setIsSaved(true);
          }
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    }
  }

  function handleCardDelete(card) {
    mainApi.deleteMovie(card._id)
      .then((res) => {
        if (res) {
          setSavedMoviesList((state) =>
            state.filter((movie) => movie._id !== card._id)
          );
          localStorage.setItem('saved-movies', JSON.stringify(savedMoviesList));
        }
      })
      .catch((err) => {
        console.error(`${err}`);
      });
  }

  // при добавлении/удалении фильма происходит рендер
  useEffect(() => {
    setFilteredSavedMovies(savedMoviesList);
  }, [savedMoviesList]);

  function handleRegister(e, data) {
    e.preventDefault();
    mainApi.registration(data)
      .then((res) => {
        if (res) {
          handleLogin(e, data);
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setSubmitError(SIGNUP_BAD_DATA_MESSAGE);
        };

        if (err.status === 409) {
          setSubmitError(SIGNUP_CONFLICT_MESSAGE);
        } else {
          setSubmitError(SIGNUP_DEFAULT_ERROR);
        }
      })
      .finally(() => {
        setBlockedInputandSubmit(false);
      })
  }

  function handleLogin(e, data) {
    e.preventDefault();
    mainApi.authentication(data)
      .then((res) => {
        if (res) {
          localStorage.setItem('isLogged', true);
          localStorage.setItem('isSavedMoviesShort', false);
          localStorage.setItem('isMoviesShort', false);
          localStorage.setItem('moviesSearchQuery', '');
          localStorage.setItem('savedMoviesSearchQuery', '');
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setSubmitError(SIGNIN_BAD_DATA_MESSAGE);
        } else {
          setSubmitError(SIGNIN_DEFAULT_ERROR);
        }
      })
      .finally(() => {
        setBlockedInputandSubmit(false);
      })
  }

  function handleChangeProfileData(e, data) {
    e.preventDefault();
    mainApi.updateUserData(data)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setSubmitError(UPDATE_SUCCESS_MESSAGE)
          setIsEditable(!isEditable);
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setSubmitError(USER_BAD_DATA_MESSAGE);
        };

        if (err.status === 409) {
          setSubmitError(SIGNUP_CONFLICT_MESSAGE);
        } else {
          setSubmitError(UPDATE_DEFAULT_ERROR);
        }
      })
  }

  function handleEditProfile() {
    setIsEditable(!isEditable);
    setSubmitError('');
  }

  function handleLogout() {
    mainApi.logout()
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          navigate('/', { replace: true });
          localStorage.clear();
        }
      })
      .catch((err) =>
        console.log('Что-то пошло не так...')
      );
  }

  useEffect(() => {
    setSubmitError('');
    setSearchMoviesError('');
    setSearchSavedMoviesError('');
  }, [location]);

  function onHamburgerClick() {
    setIsOpenHamburgerMenu(true);
  }

  function handleCloseHamburgerMenu() {
    setIsOpenHamburgerMenu(false);
  }

  return (
    <div className='page'>
      {isPreloaderActive
      ? (
          <Preloader />
        )
      : (
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
                    filteredMovies={filteredMovies}
                    savedMoviesList={savedMoviesList}
                    filteredSavedMovies={filteredSavedMovies}
                    searchMovies={handleSearchMovies}
                    isShortsChecked={isMoviesShort}
                    onShortsCheck={handleShortsFilter}
                    searchError={searchMoviesError}
                    onCardLike={handleLikeCard}
                    onCardDelete={handleCardDelete}
                    emptyInput={showSearchInputError}
                    blockedInputandSubmit={blockedInputandSubmit}
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
                    filteredMovies={filteredMovies}
                    savedMoviesList={savedMoviesList}
                    filteredSavedMovies={filteredSavedMovies}
                    isShortsChecked={isSavedMoviesShort}
                    onShortsCheck={handleSavedShortsFilter}
                    onCardDelete={handleCardDelete}
                    searchError={searchSavedMoviesError}
                    searchMovies={handleSearchSavedMovies}
                    emptyInput={showSearchInputError}
                    blockedInputandSubmit={blockedInputandSubmit}
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
                    submitError={submitError}
                    setSubmitError={setSubmitError}
                    setIsEditable={setIsEditable}
                  />
                }
              />
            </Route>
            <Route
              path='/signin'
              element={
                <Login
                  handleLogin={handleLogin}
                  submitError={submitError}
                  loggedIn={loggedIn}
                  blockedInputandSubmit={blockedInputandSubmit}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  handleRegister={handleRegister}
                  submitError={submitError}
                  setSubmitError={setSubmitError}
                  loggedIn={loggedIn}
                  blockedInputandSubmit={blockedInputandSubmit}
                />
              }
            />
            <Route
              path='*'
              element={
                <PageNotFound
                  loggedIn={loggedIn}
                />
              }
            />
          </Routes>
          <HamburgerMenu
            isHamburgerMenu={true}
            isOpenHamburgerMenu={isOpenHamburgerMenu}
            onClose={handleCloseHamburgerMenu}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
