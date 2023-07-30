import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

function Movies({ moviesList, onCardLike, searchMovies, keyword, setKeyword, isChecked, setIsChecked }) {

  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm
          searchMovies={searchMovies}
          keyword={keyword}
          setKeyword={setKeyword}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className='movies__line'></div>
        <MoviesCardList
          moviesList={moviesList}
          onCardLike={onCardLike}
        />
        <AddMoreCards />
      </div>
    </main>
  );
}

export default Movies;
