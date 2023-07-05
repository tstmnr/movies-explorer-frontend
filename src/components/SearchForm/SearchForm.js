import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__icon'>
      </div>
      <input className='search-form__input' type='text' name='title' placeholder='Фильм' />
      <button className='search-form__button' type='submit'></button>
      <div className='search-form__line'></div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
