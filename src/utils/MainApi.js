/* eslint-disable import/no-anonymous-default-export */
class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  deleteMovie(id) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        _id: id,
      }),
    });
  }

  saveMovie(card) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      })
    });
  }

  getMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: "include",
    });
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: "include",
    });
  }

  updateUserData(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
  }

  registration(data) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      }),
    })
  }

  authentication(data) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    })
  }

  logout() {
    return this._request(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: "include",
    })
  }
}

const options = {
  baseUrl: 'https://api.tstmnr.diploma.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  },
}

const mainApi = new MainApi(options);

export default mainApi;
