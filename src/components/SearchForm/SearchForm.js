import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  searchMovies,
  isShortsChecked,
  onShortsCheck,
  emptyInput,
  blockedInputandSubmit
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
    e.preventDefault();

    if (keyword.trim() === '') {
      emptyInput();
      return;
    }

    if (keyword.length > 0) {
      if (location.pathname === '/movies') {
        localStorage.setItem('moviesSearchQuery', keyword);
        searchMovies();
      }

      if (location.pathname === '/saved-movies') {
        localStorage.setItem('savedMoviesSearchQuery', keyword);
        searchMovies();
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
        disabled={blockedInputandSubmit}
        onChange={(e) => handleChangeKeyword(e)}
      />
      <button className='search-form__button' type='submit' disabled={blockedInputandSubmit}></button>
      <div className='search-form__line'></div>
      <FilterCheckbox
        isShortsChecked={isShortsChecked}
        onShortsCheck={onShortsCheck}
        blockedInputandSubmit={blockedInputandSubmit}
      />
    </form>
  );
}

export default SearchForm;
