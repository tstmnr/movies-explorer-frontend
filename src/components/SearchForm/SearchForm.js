import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMoviesByKeyword, keyword, setKeyword, isChecked, setIsChecked }) {

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    localStorage.setItem('movies', []);
    localStorage.setItem('keyword', keyword);
    searchMoviesByKeyword(e);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__icon'>
      </div>
      <input
        className='search-form__input'
        type='search'
        name='title'
        placeholder='Фильм'
        value={keyword || ''}
        onChange={handleChangeKeyword}
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
