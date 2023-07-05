import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm />
        <div className='saved-movies__line'></div>
        <MoviesCardList />
      </div>
    </main>
  );
}

export default SavedMovies;
