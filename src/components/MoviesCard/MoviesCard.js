import { React } from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ card, onCardLike, onCardDelete }) {

  const location = useLocation();

  const movieCardLikeButtonClassName = (`movies-card__like ${card.owner ? 'movies-card__like_active' : ''}`);

  function handleToggleLike() {
    onCardLike(card);
    console.log('like/dislike');
  }

  function handleDeleteCard(e) {
    onCardDelete(e, card);
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
	  const minutes = mins % 60;
	return `${hours}ч${minutes}м`;
};

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-card__image' alt={card.nameRu} src={`https://api.nomoreparties.co/${card.image.url}`} />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>{card.nameRU}</h2>
          {location.pathname === '/movies'
          ?
          <button
            className={movieCardLikeButtonClassName}
            onClick={handleToggleLike}
            type='button'
            aria-label='Добавить в сохраненные фильмы'>
          </button>
          :
          <button
            className='movies-card__button-delete'
            onClick={(e) => handleDeleteCard(e)}
            type='button'
            aria-label='Удалить фильм из сохраненных'>
          </button>
          }
        </div>
        <div className='movies-card__line'></div>
        <p className='movies-card__duration'>{getTimeFromMins(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
