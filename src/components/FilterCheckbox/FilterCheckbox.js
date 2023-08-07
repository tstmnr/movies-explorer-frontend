import './FilterCheckbox.css';

function FilterCheckbox({ isShortsChecked, onShortsCheck }) {

  function handleChangeCheckbox() {
    onShortsCheck();
  }

  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__input'
        name='slider'
        type='checkbox'
        placeholder='Чекбокс'
        checked={isShortsChecked}
        onChange={handleChangeCheckbox}
      />
      <span className='filter-checkbox__slider'></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
