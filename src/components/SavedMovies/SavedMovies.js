import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies({
  filteredMovies,
  savedMoviesList,
  filteredSavedMovies,
  isShortsChecked,
  onShortsCheck,
  onCardDelete,
  searchError,
  searchMovies
}) {

  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          isShortsChecked={isShortsChecked}
          onShortsCheck={onShortsCheck}
        />
        <div className='saved-movies__line'></div>
        <MoviesCardList
          savedMoviesRoute={true}
          filteredMovies={filteredMovies}
          filteredSavedMovies={filteredSavedMovies}
          searchError={searchError}
          savedMoviesList={savedMoviesList}
          onCardDelete={onCardDelete}
          />
      </div>
    </main>
  );
}

export default SavedMovies;
