function filterMoviesByKeyword(moviesArray, keyword, isChecked) {
  if (isChecked) {
    console.log('Фильтрация при true')
    return moviesArray.filter((movie) => ((movie.nameRU + movie.nameEN).includes(keyword) && (movie.duration < 40)));
  } else {
    console.log('Фильтрация при false')
    return moviesArray.filter((movie) => (movie.nameRU + movie.nameEN).includes(keyword));
  }
}

export default filterMoviesByKeyword;
