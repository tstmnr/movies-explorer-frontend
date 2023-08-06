/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState }from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMoviesByKeyword } from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function SavedMovies({ savedMoviesList, setSavedMoviesList, searchMovies, onCardDelete }) {

  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('isSavedMoviesShort')) || false);
  const [searchSavedMoviesError, setSearchSavedMoviesError] = useState('');

  useEffect(() => {
    setSearchSavedMoviesError('');
    mainApi.getMovies()
      .then((savedMovies) => {
        localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
        setSavedMoviesList(JSON.parse(localStorage.getItem('saved-movies')));
      })
      .catch(() => {
        setSearchSavedMoviesError('На сервере произошла ошибка. Пожалуйста, повторите попытку позже.')
      })
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('saved-movies')) !== null && JSON.parse(localStorage.getItem('saved-movies')).length > 0) {
      setSearchSavedMoviesError('');
      setSavedMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('saved-movies')), localStorage.getItem('savedMoviesSearchQuery'), isChecked));
    } else {
      setSearchSavedMoviesError('По Вашему запросу совпадений не найдено');
    }
  }, [isChecked]);

  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setSearchError={setSearchSavedMoviesError}
        />
        <div className='saved-movies__line'></div>
        <MoviesCardList
            savedMoviesList={savedMoviesList}
            onCardDelete={onCardDelete}
            searchError={searchSavedMoviesError}
          />
      </div>
    </main>
  );
}

export default SavedMovies;
