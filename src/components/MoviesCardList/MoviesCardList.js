import { useLocation} from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesCard, savedmoviesCard, onCardLike }) {

  const location = useLocation();

  return (
    <ul className='movies-list'>
      {location.pathname === '/movies'
        ?
          moviesCard.map((card) => (
            <MoviesCard
              key={card.id}
              card={card}
              onCardLike={onCardLike}
            />
          ))
        :
        savedmoviesCard.map((card) => (
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
