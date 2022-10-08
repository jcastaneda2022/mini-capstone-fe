import { get } from '../../utilities/https';

export const getAllProducts = () => {
    const url = '/product/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIST',
                payload: response
            }).catch((error) => {
                reject(error);
            })
        })
    })
}