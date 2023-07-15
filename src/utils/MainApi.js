class MainApi {
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

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  registration(data) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
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
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    })
  }

  logout() {
    return this._request(`${this._baseUrl}/profile`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }
}

const options = {
  baseUrl: 'https://api.tstmnr.diploma.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  },
}

export default new MainApi(options);
