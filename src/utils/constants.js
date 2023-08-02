const LAPTOP_SCREEN_WIDTH = 1024;
const TABLET_SCREEN_WIDTH = 768;
const MOBILE_SCREEN_WIDTH = 568;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LAPTOP = 16;
const ADDING_CARDS_ON_LAPTOP = 4;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_LARGE_TABLET = 12;
const ADDING_CARDS_ON_LARGE_TABLET = 3;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_TABLET = 8;
const ADDING_CARDS_ON_TABLET = 2;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_ON_MOBILE = 5;
const ADDING_CARDS_ON_MOBILE = 1;

function filterMoviesByKeyword(moviesArray, keyword, isChecked) {
  if (isChecked) {
    console.log('Фильтрация при true')
    return moviesArray.filter((movie) => ((movie.nameRU + movie.nameEN).includes(keyword) && (movie.duration < 40)));
  } else {
    console.log('Фильтрация при false')
    return moviesArray.filter((movie) => (movie.nameRU + movie.nameEN).includes(keyword));
  }
}

export {
  filterMoviesByKeyword,
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
}
