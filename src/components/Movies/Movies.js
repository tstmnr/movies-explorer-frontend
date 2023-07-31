import { React, useEffect, useState }from 'react';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';
import filterMoviesByKeyword from '../../utils/constants';

function Movies({ moviesList, setMoviesList, onCardLike, searchMovies, savedMoviesList }) {

  const [isChecked, setIsChecked] = useState(localStorage.getItem('isMoviesShort') || false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('movies')) !== null && JSON.parse(localStorage.getItem('movies')).length > 0) {
      console.log('меня изменили в saved-movies, сейчас я ', isChecked);
      console.log(JSON.parse(localStorage.getItem('movies')));
      console.log(localStorage.getItem('moviesSearchQuery'));
      setMoviesList(filterMoviesByKeyword(JSON.parse(localStorage.getItem('movies'))), localStorage.getItem('moviesSearchQuery'), isChecked);
    }
  }, [isChecked]);

  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className='movies__line'></div>
        <MoviesCardList
          moviesList={moviesList}
          onCardLike={onCardLike}
          savedMoviesList={savedMoviesList}
        />
        <AddMoreCards />
      </div>
    </main>
  );
}

export default Movies;
