import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import AddMoreCards from '../AddMoreCards/AddMoreCards';
import useResize from '../../hooks/useResize';
import {
  SCREEN_WIDTH_1280,
  SCREEN_WIDTH_1024,
  SCREEN_WIDTH_768,
  SCREEN_WIDTH_568,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_1280,
  ADDING_CARDS_1280,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_1024,
  ADDING_CARDS_1024,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_768,
  ADDING_CARDS_768,
  INITIAL_NUMBER_OF_CARDS_DISPLAYED_568,
  ADDING_CARDS_568
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

  const addMoreCardsButtonClass = `add-more ${moviesList.length <= numberOfDisplayedCards && 'add-more__button_hidden'}`;

  useEffect(() => {
    const countMoviesOnDisplay = () => {
      if (windowSize.width >= SCREEN_WIDTH_1280) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_1280);
        setNumberOfAddedCards(ADDING_CARDS_1280);
      } else if (windowSize.width >= SCREEN_WIDTH_1024) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_1024);
        setNumberOfAddedCards(ADDING_CARDS_1024);
      } else if (windowSize.width >= SCREEN_WIDTH_768) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_768);
        setNumberOfAddedCards(ADDING_CARDS_768);
      } else if (windowSize.width >= SCREEN_WIDTH_568) {
        setNumberOfDisplayedCards(INITIAL_NUMBER_OF_CARDS_DISPLAYED_568);
        setNumberOfAddedCards(ADDING_CARDS_568);
      }
    };
    countMoviesOnDisplay();
  }, [windowSize]);

  useEffect(() => {
    setDisplayedCards(moviesList.slice(0, numberOfDisplayedCards));
  }, [moviesList, numberOfDisplayedCards]);

  return (
    <>
      <ul className='movies-list'>
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
      <AddMoreCards
        addMoreCardsButtonClass={addMoreCardsButtonClass}
        onClick={handleMoreCards}
      />
    </>
  );
}

export default MoviesCardList;
