/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState }from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMoviesByKeyword } from '../../utils/constants';

function Movies({ moviesList, setMoviesList, onCardLike, searchMovies, savedMoviesList, searchError, setSearchError }) {

  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('isMoviesShort')) || false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('movies')) !== null && JSON.parse(localStorage.getItem('movies')).length > 0) {
      setMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('movies')), localStorage.getItem('moviesSearchQuery'), isChecked));

      if (moviesList.length === 0) {
        setSearchError('По Вашему запросу совпадений не найдено');
      }
    }
  }, [setIsChecked]);

  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setSearchError={setSearchError}
        />
        <div className='movies__line'></div>
        <MoviesCardList
          moviesList={moviesList}
          onCardLike={onCardLike}
          savedMoviesList={savedMoviesList}
          searchError={searchError}
        />
      </div>
    </main>
  );
}

export default Movies;
