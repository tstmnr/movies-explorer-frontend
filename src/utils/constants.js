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
const ADDING_CARDS_ON_MOBILE = 2;

const MOVIE_BAD_DATA_MESSAGE = 'Переданы некоректные данные при создании карточки';
const MOVIE_NOT_FOUND_MESSAGE = 'Фильм не найден';
const MOVIE_FORBIDDEN_MESSAGE = 'Нельзя удалить фильм созданный не вами';
const MOVIE_BAD_ID_MESSAGE = 'Передан некорректный ID фильма';
const MOVIE_DELETE_NF_MESSAGE = 'Карточка с указанным ID не найдена';
const SIGNIN_BAD_DATA_MESSAGE = 'Вы ввели неправильный email или пароль'; //
const SIGNIN_DEFAULT_ERROR = 'При авторизации произошла ошибка'; //
const SIGNUP_BAD_DATA_MESSAGE = 'Переданы некоректные данные при регистрации'; //
const SIGNUP_CONFLICT_MESSAGE = 'Пользователь с указанным email уже зарегестрирован'; //
const SIGNUP_DEFAULT_ERROR = 'При регистрации пользователя произошла ошибка'; //
const USER_BAD_DATA_MESSAGE = 'Переданны некоретные данные для редактирования данных пользователя'; //
const UPDATE_DEFAULT_ERROR = 'При обновлении профиля произошла ошибка'; //
const AUTH_MESSAGE = 'Необходима авторизация';
const MOVIES_NOT_FOUND = 'По вашему запросу совпадений не найдено';
const EMPTY_INPUT = 'Пожалуйста, введите ключевое слово поиска';
const SERVER_ERROR = 'На сервере произошла ошибка. Пожалуйста, повторите попытку позже';

function filterMoviesByKeyword(moviesArray, keyword, isChecked) {
  if (isChecked) {
    return moviesArray.filter((movie) => ((movie.nameRU + movie.nameEN).toLowerCase().includes(keyword.toLowerCase()) && (movie.duration < 40)));
  } else {
    return moviesArray.filter((movie) => (movie.nameRU + movie.nameEN).toLowerCase().includes(keyword.toLowerCase()));
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
  ADDING_CARDS_ON_MOBILE,
  MOVIE_BAD_DATA_MESSAGE,
  MOVIE_NOT_FOUND_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  MOVIE_BAD_ID_MESSAGE,
  MOVIE_DELETE_NF_MESSAGE,
  SIGNIN_BAD_DATA_MESSAGE,
  SIGNIN_DEFAULT_ERROR,
  SIGNUP_BAD_DATA_MESSAGE,
  SIGNUP_CONFLICT_MESSAGE,
  SIGNUP_DEFAULT_ERROR,
  USER_BAD_DATA_MESSAGE,
  UPDATE_DEFAULT_ERROR,
  AUTH_MESSAGE,
  EMPTY_INPUT,
  MOVIES_NOT_FOUND,
  SERVER_ERROR
}
