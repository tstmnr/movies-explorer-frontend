import { React, useEffect, useState }from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filterMoviesByKeyword from '../../utils/constants';

function SavedMovies({ savedMoviesList, setSavedMoviesList, searchMovies, onCardDelete }) {

  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('isSavedMoviesShort')) || false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('saved-movies')) !== null && JSON.parse(localStorage.getItem('saved-movies')).length > 0) {
      setSavedMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('saved-movies')), localStorage.getItem('savedMoviesSearchQuery'), isChecked));
    }
  }, [isChecked]);

  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className='saved-movies__line'></div>
        <MoviesCardList
            savedMoviesList={savedMoviesList}
            onCardDelete={onCardDelete}
          />
      </div>
    </main>
  );
}

export default SavedMovies;
