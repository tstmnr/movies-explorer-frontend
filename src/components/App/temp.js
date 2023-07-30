
  function handleCardLike(card) {
    console.log(card);
    if (!card.owner) {
      mainApi.saveMovie(card)
        .then((savedCard) => {
          setSavedMovieCards([...savedMoviesCard, savedCard]);
          localStorage.setItem('saved-movies', JSON.stringify(savedMoviesCard))
          console.log(savedMoviesCard);
        })
    } else {
      console.log(card, card.owner);
      mainApi.deleteMovie(card._id)
      .then((deletedCard) => {
        setSavedMovieCards(findAndDeleteSavedMovie(deletedCard));
        localStorage.setItem('saved-movies', JSON.stringify(savedMoviesCard));
      })
      .catch((err) => {
        console.log(err);
      })
    }
    mainApi.getMovies()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function findAndDeleteSavedMovie(deletedCard) {
      return savedMoviesCard.filter((card) => card.moviesId !== deletedCard.moviesId);
  }

  function searchMoviesByKeyword(e) {
    e.preventDefault();
    if (keyword) {
      setIsEmptySearchBar(false);
      moviesApi.getMoviesCards()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(searchAndFilterMoviesCards(res)));
        setMovieCards(JSON.parse(localStorage.getItem('movies')));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setKeyword('');
      })
    } else {
      setIsEmptySearchBar(true);
    }
  }



  /*


  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(moviesCard));
    localStorage.setItem('saved-movies', JSON.stringify(savedMoviesCard));
    localStorage.setItem('isChecked', isChecked);
    if (JSON.parse(localStorage.getItem('movies')).length > 0) {
      setMovieCards(searchAndFilterMoviesCards(JSON.parse(localStorage.getItem('movies'))));
    }
    if (JSON.parse(localStorage.getItem('saved-movies')).length > 0) {
      setSavedMovieCards(searchAndFilterMoviesCards(JSON.parse(localStorage.getItem('saved-movies'))));
    }
  }, [])

  useEffect(() => {
    setMovieCards(searchAndFilterMoviesCards(JSON.parse(localStorage.getItem('movies'))));
    setSavedMovieCards(searchAndFilterMoviesCards(JSON.parse(localStorage.getItem('saved-movies'))));
  }, [isChecked])


  {isEmptySearchBar
    ?
      <p className='movies__empty'>Пожалуйста, введите ключевое слово для поиска фильмов</p>
    :
    ((moviesList.length !== 0) || null
    ?
    <>
      <MoviesCardList
        moviesCard={moviesCard}
        isEmptySearchBar={isEmptySearchBar}
        onCardLike={onCardLike}
      />
      <AddMoreCards />
    </>
    :
      <p className='movies__empty'>По Вашему запросу совпадений не найдено</p>
    )}
