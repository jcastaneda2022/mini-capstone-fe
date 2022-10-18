import { get, put, deleteMethod } from '../../utilities/https';
const APIServicePath = 'https://minicapsone-jowel.herokuapp.com';

export const getAllProducts = () => {
    const url = APIServicePath + '/product/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getProduct = (productId) => {
    const url = APIServicePath + `/product/getById/${productId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_PRODUCT',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addProduct = (body) => {
    const url = APIServicePath + '/product/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteProduct = (productId) => {
    const url = APIServicePath + `/product/delete/${productId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}