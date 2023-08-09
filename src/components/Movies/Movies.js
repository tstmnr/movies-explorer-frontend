import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  filteredMovies,
  savedMoviesList,
  filteredSavedMovies,
  searchMovies,
  isShortsChecked,
  onShortsCheck,
  searchError,
  onCardLike,
  onCardDelete,
  emptyInput,
  blockedInputandSubmit
}) {

  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isShortsChecked={isShortsChecked}
          onShortsCheck={onShortsCheck}
          emptyInput={emptyInput}
          blockedInputandSubmit={blockedInputandSubmit}
        />
        <div className='movies__line'></div>
        <MoviesCardList
          savedMoviesRoute={false}
          filteredMovies={filteredMovies}
          savedMoviesList={savedMoviesList}
          searchError={searchError}
          filteredSavedMovies={filteredSavedMovies}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      </div>
    </main>
  );
}

export default Movies;
