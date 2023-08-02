const SCREEN_WIDTH_1280 = 1280;
const SCREEN_WIDTH_1024 = 1024;
const SCREEN_WIDTH_768 = 768;
const SCREEN_WIDTH_568 = 568;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_1280 = 16;
const ADDING_CARDS_1280 = 4;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_1024 = 12;
const ADDING_CARDS_1024 = 3;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_768 = 8;
const ADDING_CARDS_768 = 2;

const INITIAL_NUMBER_OF_CARDS_DISPLAYED_568 = 5;
const ADDING_CARDS_568 = 1;

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
  ADDING_CARDS_568,
}
