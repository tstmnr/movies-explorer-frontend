import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({
  card,
  onCardLike,
  savedMoviesRoute,
  savedMoviesList,
  onCardDelete
}) {

  const location = useLocation();

  const [isSaved, setIsSaved] = useState(
    savedMoviesRoute
      ? true
      : savedMoviesList.some((savedMovie) => savedMovie.movieId === card.id)
  );

  const movieCardLikeButtonClassName = (`movies-card__like ${isSaved ? 'movies-card__like_active' : ''}`);

  useEffect(() => {
    setIsSaved(
      savedMoviesList?.some((savedMovie) => savedMovie.movieId === card.id)
    );
  }, [card, savedMoviesList]);

  function handleLikeCard() {
    onCardLike(card, isSaved, setIsSaved);
  }

  function handleDeleteCard() {
    onCardDelete(card);
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
	  const minutes = mins % 60;
	return `${hours}ч${minutes}м`;
};

  return (
    <li className='movies-card'>
      <a className='movies-card__link' href={card.trailerLink} target='_blank' rel='noreferrer'>
        <img
        className='movies-card__image'
        alt={card.nameRu}
        src={
          savedMoviesRoute
          ? `${card.image}`
          : `https://api.nomoreparties.co/${card.image.url}`
        }
          />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>{card.nameRU}</h2>
          {location.pathname === '/movies'
          ?
          <button
            className={movieCardLikeButtonClassName}
            onClick={handleLikeCard}
            type='button'
            aria-label='Добавить в сохраненные фильмы'>
          </button>
          :
          <button
            className='movies-card__button-delete'
            onClick={handleDeleteCard}
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
