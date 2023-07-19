import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMoviesByKeyword, keyword, setKeyword }) {

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    localStorage.setItem('movies', []);
    localStorage.setItem('keyword', keyword);
    searchMoviesByKeyword(e, keyword);
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
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
