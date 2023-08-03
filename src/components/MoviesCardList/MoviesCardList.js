import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import AddMoreCards from '../AddMoreCards/AddMoreCards';
import useResize from '../../hooks/useResize';
import {
  LAPTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LAPTOP,
  ADDING_CARDS_ON_LAPTOP,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LARGE_TABLET,
  ADDING_CARDS_ON_LARGE_TABLET,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_TABLET,
  ADDING_CARDS_ON_TABLET,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_MOBILE,
  ADDING_CARDS_ON_MOBILE
} from '../../utils/constants'

function MoviesCardList({ moviesList, savedMoviesList, onCardLike, onCardDelete }) {

  const location = useLocation();
  const windowSize = useResize();

  const [numberOfDisplayedCards, setNumberOfDisplayedCards] = useState(0);
  const [numberOfAddedCards, setNumberOfAddedCards] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);

  const handleMoreCards = () => {
    setNumberOfDisplayedCards(numberOfDisplayedCards + numberOfAddedCards);
  };

  const addMoreCardsButtonClass = `add-more ${moviesList?.length <= numberOfDisplayedCards && 'add-more__button_hidden'}`;
  const movieListClass = `movies-list ${location.pathname === '/movies' && (moviesList?.length <= numberOfDisplayedCards && 'movies-list_margin_bottom')}`;

  useEffect(() => {
    const countMoviesOnDisplay = () => {
      if (windowSize.width > LAPTOP_SCREEN_WIDTH) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LAPTOP);
        setNumberOfAddedCards(ADDING_CARDS_ON_LAPTOP);
      } else if (windowSize.width > TABLET_SCREEN_WIDTH) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LARGE_TABLET);
        setNumberOfAddedCards(ADDING_CARDS_ON_LARGE_TABLET);
      } else if (windowSize.width > MOBILE_SCREEN_WIDTH) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_TABLET);
        setNumberOfAddedCards(ADDING_CARDS_ON_TABLET);
      } else if (windowSize.width <= MOBILE_SCREEN_WIDTH) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_MOBILE);
        setNumberOfAddedCards(ADDING_CARDS_ON_MOBILE);
      }
    };
    countMoviesOnDisplay();
  }, [windowSize]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      setDisplayedCards(moviesList.slice(0, numberOfDisplayedCards));
    }
  }, [moviesList, numberOfDisplayedCards, location.pathname]);

  return (
    <>
      <ul className={movieListClass}>
        {
          (location.pathname === '/movies') &&
          displayedCards?.map((movie) => (
              <MoviesCard
                key={movie.id}
                card={movie}
                onCardLike={onCardLike}
                savedMoviesList={savedMoviesList}
              />
            ))
        }
        {
          (location.pathname === '/saved-movies') &&
          savedMoviesList?.map((savedMovie) => (
              <MoviesCard
                key={savedMovie.id}
                card={savedMovie}
                savedMoviesRoute={true}
                savedMoviesList={savedMoviesList}
                onCardDelete={onCardDelete}
              />
            ))
        }
      </ul>
      {
        (location.pathname === '/movies') &&
        <AddMoreCards
          addMoreCardsButtonClass={addMoreCardsButtonClass}
          onClick={handleMoreCards}
        />
      }
    </>
  );
}

export default MoviesCardList;
