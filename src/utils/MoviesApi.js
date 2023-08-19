class MoviesApi {
    constructor(basePath) {
        this._basePath = basePath;
    }

    _getheaders() {
        return  {};
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._basePath}/beatfilm-movies`, {
            headers: this._getheaders(),
        }).then(this._getJson);
    }
}

const moviesApi = new MoviesApi("https://api.nomoreparties.co");
export default moviesApi;