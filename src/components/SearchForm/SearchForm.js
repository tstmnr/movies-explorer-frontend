import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  searchMovies,
  isShortsChecked,
  onShortsCheck,
}) {

  const location = useLocation();

  const [keyword, setKeyword] = useState(
    location.pathname === '/movies'
    ? localStorage.getItem('moviesSearchQuery') || ''
    : localStorage.getItem('savedMoviesSearchQuery') || ''
  );

  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    if (keyword.length > 0) {
      if (location.pathname === '/movies') {
        localStorage.setItem('moviesSearchQuery', keyword);
        searchMovies(e);
      }

      if (location.pathname === '/saved-movies') {
        localStorage.setItem('savedMoviesSearchQuery', keyword);
        searchMovies(e);
      }
    }
  }

  return (
    <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
      <div className='search-form__icon'>
      </div>
      <input
        className='search-form__input'
        type='search'
        name='title'
        placeholder='Фильм'
        value={keyword || ''}
        onChange={(e) => handleChangeKeyword(e)}
      />
      <button className='search-form__button' type='submit'></button>
      <div className='search-form__line'></div>
      <FilterCheckbox
        isShortsChecked={isShortsChecked}
        onShortsCheck={onShortsCheck}
      />
    </form>
  );
}

export default SearchForm;
