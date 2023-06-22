import React from 'react';
import './SearchForm.css';
import { ReactComponent as SearchFormIcon } from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <form className='search-form'>
      <SearchFormIcon className='search-form__icon' />
      <input className='search-form__input' type='text' name='title' value='' placeholder='Фильм' />
      <button className='search-form__button' type='submit'></button>
    </form>
  );
}

export default SearchForm;
