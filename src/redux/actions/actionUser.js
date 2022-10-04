import { put } from '../../utilities/https';

export const registerUser = (newUserDetails) => {
    const url = '/user/signup';
    return new Promise((resolve, reject) => {
        const promise = put(url, newUserDetails)
        promise.then((response) => {
            resolve({
                type: 'REGISTER_USER',
                body: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const loginUser = (activeUserDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: activeUserDetails
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT_USER',
        })
    }
}