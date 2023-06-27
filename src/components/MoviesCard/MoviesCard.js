import { useContext}  from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './MoviesCard.css';
import cardImage from '../../images/card-image.png';

function MoviesCard({ card, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);
/*
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((item) => item === currentUser._id);
  const cardLikeButtonClassName = (`card__favourites ${isLiked && 'card__favourities_active'}`);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }*/

  return (
    <li className='movies-card'>
      <img className='movies-card__image' alt={`Заставка фильма 33 слова о дизайне`} src={cardImage} />
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <button className='movies-card__like' type='button' aria-label='Добавить в сохраненные фильмы'>
          </button>
        </div>
        <div className='movies-card__line'></div>
        <small className='movies-card__duration'>1ч42м</small>
      </div>
    </li>
  );
}

export default MoviesCard;
