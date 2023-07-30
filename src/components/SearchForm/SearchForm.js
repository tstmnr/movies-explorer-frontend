import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovies, keyword, setKeyword, isChecked, setIsChecked }) {

  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    localStorage.setItem('keyword', keyword);
    searchMovies(e);
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
