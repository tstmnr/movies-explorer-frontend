import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

function Movies({ moviesCard }) {
  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm />
        <div className='movies__line'></div>
        <MoviesCardList />
        <AddMoreCards />
      </div>
    </main>
  );
}

export default Movies;
