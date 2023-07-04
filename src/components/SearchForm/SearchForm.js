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
      <div className='search-form__wrapper'>
        <FilterCheckbox />
        <p className='search-form__filter-name'>Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
