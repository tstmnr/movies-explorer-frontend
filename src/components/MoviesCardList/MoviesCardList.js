import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesCard, onCardLike }) {

  return (
    <ul className='movies-list'>
      {
        moviesCard.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            onCardLike={onCardLike}
          />
        ))
      }
    </ul>
  );
}

export default MoviesCardList;
