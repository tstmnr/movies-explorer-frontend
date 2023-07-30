import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMoviesList, onCardDelete }) {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm />
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
