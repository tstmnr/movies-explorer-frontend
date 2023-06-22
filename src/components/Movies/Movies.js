import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

function Movies() {
  return (
    <section className='movies'>
      <div className='movies__content'>
        <SearchForm />
        <div className='movies__line'></div>
        <MoviesCardList />
        <AddMoreCards />
      </div>
    </section>
  );
}

export default Movies;
