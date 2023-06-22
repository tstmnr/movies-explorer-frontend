import './SearchForm.css';
import { ReactComponent as SearchFormIcon } from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search-form'>
      <SearchFormIcon className='search-form__icon' />
      <input className='search-form__input' type='text' name='title' placeholder='Фильм' />
      <button className='search-form__button' type='submit'></button>
      <div className='search-form__line'></div>
      <FilterCheckbox />
      <p className='search-form__filter-name'>Короткометражки</p>
    </form>
  );
}

export default SearchForm;
