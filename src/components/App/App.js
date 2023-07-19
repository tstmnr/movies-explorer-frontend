import { React, useEffect, useState/* useEffect*/ }from 'react';
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

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [moviesCard, setMovieCards] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isEmptySearchBar, setIsEmptySearchBar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMovieCards(JSON.parse(localStorage.getItem('movies')));
    setKeyword(localStorage.getItem('keyword'));
  }, []);

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
        setCurrentUser({//добавление на ВРЕМЯ
          name: res.name,
          email: res.email,
        });
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

  function searchMoviesByKeyword(e, keyword) {
    e.preventDefault();
    if (keyword) {
      setIsEmptySearchBar(false);
      moviesApi.getMoviesCards()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(searchAndfilterMoviesCards(res, keyword)));
        setMovieCards(JSON.parse(localStorage.getItem('movies')));
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      setIsEmptySearchBar(true);
    }
  }

  function searchAndfilterMoviesCards(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      return (movie.nameRU + movie.nameEN).includes(keyword)
    })
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
                <ProtectedRouterElement
                  path='movies'
                  loggedIn={loggedIn}
                  component={Movies}
                  searchMoviesByKeyword={searchMoviesByKeyword}
                  moviesCard={moviesCard}
                  keyword={keyword}
                  setKeyword={setKeyword}
                  isEmptySearchBar={isEmptySearchBar}
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
