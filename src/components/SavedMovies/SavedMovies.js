import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <div className='saved-movies__content'>
        <SearchForm />
        <div className='saved-movies__line'></div>
        <MoviesCardList />
        <AddMoreCards />
      </div>
    </section>
  );
}

export default SavedMovies;
