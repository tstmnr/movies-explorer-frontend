import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedmoviesCard, onCardLike}) {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm />
        <div className='saved-movies__line'></div>
        <MoviesCardList
            savedmoviesCard={savedmoviesCard}
            onCardLike={onCardLike}
          />
      </div>
    </main>
  );
}

export default SavedMovies;
