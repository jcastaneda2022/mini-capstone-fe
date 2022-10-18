import { get, put, deleteMethod } from '../../utilities/https';
const APIServicePath = 'https://minicapsone-jowel.herokuapp.com';

export const getAllPopularProducts = () => {
    const url = APIServicePath + '/popular/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_POPULAR_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const addPopularProduct = (body) => {
    const url = APIServicePath + `/popular/add`
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_POPULAR_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deletePopularProduct = (productId) => {
    const url = APIServicePath + `/popular/delete/${productId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_POPULAR_PRODUCT_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}
