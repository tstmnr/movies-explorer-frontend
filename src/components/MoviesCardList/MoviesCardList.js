import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import AddMoreCards from '../AddMoreCards/AddMoreCards';

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

function MoviesCardList({
  savedMoviesRoute,
  filteredMovies,
  savedMoviesList,
  searchError,
  filteredSavedMovies,
  onCardLike,
  onCardDelete,
}) {

  const location = useLocation();
  const windowSize = useResize();

  const [numberOfDisplayedCards, setNumberOfDisplayedCards] = useState(0);
  const [numberOfAddedCards, setNumberOfAddedCards] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);

  const moviesArray = savedMoviesRoute ? filteredSavedMovies : filteredMovies;

    console.log('moviesArray из Movies', moviesArray)
  const handleMoreCards = () => {
    setNumberOfDisplayedCards(numberOfDisplayedCards + numberOfAddedCards);
  };

  const addMoreCardsButtonClass = `add-more ${moviesArray?.length <= numberOfDisplayedCards && 'add-more__button_hidden'}`;

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
    setDisplayedCards(moviesArray.slice(0, numberOfDisplayedCards));
  }, [moviesArray, numberOfDisplayedCards]);
  console.log('displayedCards из Movies', displayedCards)

  return (
    <>
      {searchError ? (
          <p className='movies-list__error'>{searchError}</p>
        ) : (
        <ul className='movies-list'>
          {
            (location.pathname === '/movies') &&
            displayedCards.map((movie) => (
                <MoviesCard
                  key={movie.id}
                  card={movie}
                  savedMoviesRoute={savedMoviesRoute}
                  savedMoviesList={savedMoviesList}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              ))
          }
          {
            (location.pathname === '/saved-movies') &&
            displayedCards.map((savedMovie) => (
                <MoviesCard
                  key={savedMovie.id}
                  card={savedMovie}
                  savedMoviesRoute={savedMoviesRoute}
                  savedMoviesList={savedMoviesList}
                  onCardDelete={onCardDelete}
                />
              ))
          }
        </ul>
        )}
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
