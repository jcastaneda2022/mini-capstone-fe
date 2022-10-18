import { put, post } from '../../utilities/https';
const APIServicePath = 'https://minicapsone-jowel.herokuapp.com';

export const registerUser = (newUserDetails) => {
    const url = APIServicePath + '/user/signup';
    return new Promise((resolve, reject) => {
        const promise = put(url, newUserDetails)
        promise.then((response) => {
            resolve({
                type: 'REGISTER_USER',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const loginUser = (activeUserDetails) => {
    const url = APIServicePath + '/user/login';
    return new Promise((resolve, reject) => {
        const promise = post(url, activeUserDetails)
        promise.then((response) => {
            resolve({
                type: 'LOGIN_USER',
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const loginUserViaProvider = (email) => {
    const url = APIServicePath + `/user/loginByProvider/${email}`;
    return new Promise((resolve, reject) => {
        const promise = post(url)
        promise.then((response) => {
            resolve({
                type: 'LOGIN_USER',
            })
        }).catch((error) => {
            reject(error)
        })
    })
}