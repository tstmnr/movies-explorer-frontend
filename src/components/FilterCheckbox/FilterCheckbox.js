import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='filter-checkbox'>
      <input
        className='filter-checkbox__input'
        name='slider'
        type='checkbox'
      />
      <span className='filter-checkbox__slider'></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
