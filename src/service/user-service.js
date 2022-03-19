import { utilService } from './util-service.js';
import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/auth/'
    : '//localhost:3030/api/auth/';

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
};

async function login(username, password) {
    console.log('username', username);
    console.log('password', password);
    try {
        const loggedinUser = await axios.post(BASE_URL + 'login', { username, password });
        return loggedinUser;
    } catch (err) {
        console.log('err', err);
    }
}

function signup(fullname, username, password) {
    console.log('password from front service ', password);
    return axios.post(BASE_URL + 'signup', { fullname, username, password })
        .then(res => res.data)
        .then(user => {
            utilService.saveToStorage('logginUser', user);
            return user;
        });
}

function logout() {

    return axios.post(BASE_URL + 'logout')
        .then(() => {
            utilService.saveToStorage('loggedinUser', '');
            return '';
        });
}
function getLoggedinUser() {
    return utilService.loadFromStorage('loggedinUser');
}

function getUsersList() {

}