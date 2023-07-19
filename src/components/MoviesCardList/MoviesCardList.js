import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesCard }) {

  return (
    <ul className='movies-list'>
      {
        moviesCard.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
          />
        ))
      }
    </ul>
  );
}

export default MoviesCardList;
