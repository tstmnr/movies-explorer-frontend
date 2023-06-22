import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const location = useLocation();
/*
      <Route
        path="/saved-movies"
        element={
          <SavedMovies
            cards={savedCards}
            onFilterChange={handleFilterChange}
            isFilterOn={isFilterOn}
          />
        }
      />*/
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
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
        path='/movies'
        element={
          <Movies />
        }
      />
      </Route>
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
