import { config } from "./config";

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({url, token}) {
        this._url = url;
        this._token = token;
    }
    
    getPosts() {
        return fetch(`${this._url}/posts`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
    }

    addLike(postId) {
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method:'PUT',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
    }

    deleteLike(postId) {
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method:'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
    }

    deletePost(postId) {
        return fetch(`${this._url}/posts/${postId}`, {
            method:'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
    }
}

export default new Api(config);

