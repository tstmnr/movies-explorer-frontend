class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`${res.message}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getMoviesCards() {
    return this._request(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const options = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  },
}

export default new MoviesApi(options);
