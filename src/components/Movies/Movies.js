import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className='movies'>
      <div className='movies__content'>
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
  );
}

export default Movies;
