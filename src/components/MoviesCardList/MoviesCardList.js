import { useLocation} from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesCard, savedMoviesCard, onCardLike }) {

  const location = useLocation();
  console.log(savedMoviesCard);
  return (
    <ul className='movies-list'>
      {
        (location.pathname === '/movies') &&
          moviesCard?.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              onCardLike={onCardLike}
            />
          ))
      }
      {
        (location.pathname === '/saved-movies') &&
          savedMoviesCard?.map((card) => (
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
