import './FilterCheckbox.css';

function FilterCheckbox({ isChecked, setIsChecked }) {

  function handleChangeCheckbox() {
    localStorage.setItem('isChecked', !isChecked);
    setIsChecked(!isChecked);
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
