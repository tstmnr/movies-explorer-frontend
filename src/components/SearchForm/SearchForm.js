import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovies, isChecked, setIsChecked }) {

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
    if (keyword.length > 0 || keyword !== undefined || keyword !== null) {
      if (location.pathname === '/movies') {
        localStorage.setItem('moviesSearchQuery', keyword);
        searchMovies(e, isChecked);
      }

      if (location.pathname === '/saved-movies') {
        localStorage.setItem('savedMoviesSearchQuery', keyword);
        searchMovies(e, isChecked);
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
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </form>
  );
}

export default SearchForm;
