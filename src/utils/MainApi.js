class MainApi {
    constructor(basePath) {
        this._basePath = basePath;
    }

    _checkError(res) {
        if (res.ok) {
            return res.json();

        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _getheaders() {
        return  {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        };
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    registerUser(name, email, password) {
        return fetch(`${this._basePath}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password})
        }).then((res) => this._checkError(res));
    }

    loginUser(email, password) {
        return fetch(`${this._basePath}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        }).then((res) => this._checkError(res));
    }

    checkToken() {
        return fetch(`${this._basePath}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
        }).then((res) => this._checkError(res));
    }

    updateUser({email, name}) {
        return fetch(`${this._basePath}/users/me`, {
            method: 'PATCH',
            headers: this._getheaders(),
            body: JSON.stringify({
                email: email,
                name: name,
            }),
        }).then(this._getJson);
    }

    saveMovie(movie) {
        return fetch(`${this._basePath}/movies`, {
            method: 'POST',
            headers: this._getheaders(),
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id
            }),
        }).then(this._getJson);
    }

    deleteMovie(id) {
        return fetch(`${this._basePath}/movies/${id}`, {
            method: 'DELETE',
            headers: this._getheaders(),
        }).then(this._getJson);
    }

    getUserMovies() {
        return fetch(`${this._basePath}/movies`, {
            method: 'GET',
            headers: this._getheaders(),
        }).then(this._getJson);
    }
}

const mainApi = new MainApi("https://api.domainname.ivan.nomoredomains.work");
export default mainApi;