import { useLocation } from 'react-router-dom';

import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, setIsChecked }) {

  const location = useLocation();

  function handleChangeCheckbox() {
    if (location.pathname === '/movies') {
      localStorage.setItem('isMoviesShort', !isChecked);
      setIsChecked(!isChecked);
    }
    if (location.pathname === '/saved-movies') {
      localStorage.setItem('isSavedMoviesShort', !isChecked);
      setIsChecked(!isChecked);
    }
  }

  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__input'
        name='slider'
        type='checkbox'
        placeholder='Чекбокс'
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
      <span className='filter-checkbox__slider'></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
