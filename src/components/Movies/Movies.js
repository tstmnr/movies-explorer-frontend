import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

function Movies({ searchMoviesByKeyword, moviesCard, keyword, setKeyword, isEmptySearchBar, isChecked, setIsChecked, onCardLike }) {
  return (
    <main className='movies'>
      <div className='movies__content'>
        <SearchForm
          searchMoviesByKeyword={searchMoviesByKeyword}
          keyword={keyword}
          setKeyword={setKeyword}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className='movies__line'></div>
        {isEmptySearchBar
        ?
          <p className='movies__empty'>Пожалуйста, введите ключевое слово для поиска фильмов</p>
        :
        ((moviesCard.length !== 0) || null
        ?
        <>
          <MoviesCardList
            moviesCard={moviesCard}
            isEmptySearchBar={isEmptySearchBar}
            onCardLike={onCardLike}
          />
          <AddMoreCards />
        </>
        :
          <p className='movies__empty'>По Вашему запросу совпадений не найдено</p>
        )}
      </div>
    </main>
  );
}

export default Movies;
