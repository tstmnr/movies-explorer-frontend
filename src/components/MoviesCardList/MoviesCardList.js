import { useLocation} from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, savedMoviesList, onCardLike, onCardDelete }) {

  const location = useLocation();

  return (
    <ul className='movies-list'>
      {
        (location.pathname === '/movies') &&
        moviesList?.map((movie) => (
            <MoviesCard
              key={movie.id}
              card={movie}
              onCardLike={onCardLike}
            />
          ))
      }
      {
        (location.pathname === '/saved-movies') &&
        savedMoviesList?.map((savedMovie) => (
            <MoviesCard
              key={savedMovie.id}
              card={savedMovie}
              onCardDelete={onCardDelete}
            />
          ))
      }
    </ul>
  );
}

export default MoviesCardList;
