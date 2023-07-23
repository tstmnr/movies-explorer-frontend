import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedmoviesCard }) {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm />
        <div className='saved-movies__line'></div>
        <MoviesCardList
            moviesCard={savedmoviesCard}
          />
      </div>
    </main>
  );
}

export default SavedMovies;
