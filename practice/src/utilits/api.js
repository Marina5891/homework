import { config } from "./config";

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({url, token}) {
        this._url = url;
        this._token = token;
    }
    
    /* getPosts() {
        return fetch(`${this._url}/posts`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    } */

    getPosts(pageNumber) {
        return fetch(`${this._url}/posts/paginate?page=${pageNumber}&limit=12`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

    addLike(postId) {
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method:'PUT',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

    deleteLike(postId) {
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method:'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

    deletePost(postId) {
        return fetch(`${this._url}/posts/${postId}`, {
            method:'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }
    
    addPost(post) {
        return fetch(this._url + '/posts', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(onResponse)
        .catch(err => alert(err))
    }

    getPost(postId) {
        return fetch(`${this._url}/posts/${postId}`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

    getComments(postId) {
        return fetch(`${this._url}/posts/comments/${postId}`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(onResponse)
        .catch(err => alert(err))
    }

}

export default new Api(config);

