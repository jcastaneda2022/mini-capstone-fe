import { get, put, deleteMethod } from '../../utilities/https';
const APIServicePath = 'https://minicapsone-jowel.herokuapp.com';

export const getAllBlogs = () => {
    const url = APIServicePath + '/blog/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_BLOG_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const addBlog = (body) => {
    const url = APIServicePath + `/blog/add`
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_BLOG_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deleteBlog = (blogId) => {
    const url = APIServicePath + `/blog/delete/${blogId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_BLOG_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}