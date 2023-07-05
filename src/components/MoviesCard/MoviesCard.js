import { React, useState } from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCard.css';
import cardImage from '../../images/card-image.png';

function MoviesCard() {

  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);
  const movieCardLikeButtonClassName = (`movies-card__like ${isLiked && 'movies-card__like_active'}`);

  const handleToggleLike = () => setIsLiked(!isLiked);

  function handleDeleteCard(e) {
    console.log(e.target.closest('.movies-card').remove());
  }

  return (
    <li className='movies-card'>
      <img className='movies-card__image' alt={`Заставка фильма 33 слова о дизайне`} src={cardImage} />
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>33 коровы </h2>
          {location.pathname === '/movies'
          ?
          <button className={movieCardLikeButtonClassName} onClick={handleToggleLike} type='button' aria-label='Добавить в сохраненные фильмы'>
          </button>
          :
          <button className='movies-card__button-delete' onClick={handleDeleteCard} type='button' aria-label='Удалить фильм из сохраненных'>
          </button>
          }
        </div>
        <div className='movies-card__line'></div>
        <p className='movies-card__duration'>1ч42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
