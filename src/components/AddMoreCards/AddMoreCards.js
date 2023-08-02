import './AddMoreCards.css';

function AddMoreCards({ addMoreCardsButtonClass, onClick }) {
  return (
    <button className={addMoreCardsButtonClass} type='button' onClick={onClick}>Ещё</button>
  );
}

export default AddMoreCards;
