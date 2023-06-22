import './MoviesCard.css';
import cardImage from '../../images/card-image.png'

function MoviesCard() {
  return (
    <li className='movies-card'>
      <img className='movies-card__image' alt={`Заставка фильма 33 слова о дизайне`} src={cardImage} />
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <button className='movies-card__button' type='button' aria-label='Добавить в избранное'>
            <div className='movies-card__like'></div>
          </button>
        </div>
        <div className='movies-card__line'></div>
        <small className='movies-card__duration'>1ч42м</small>
      </div>
    </li>
  );
}

export default MoviesCard;
