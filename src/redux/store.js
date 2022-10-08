import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

// Reducers
import userReducer from "./reducers/userReducer";
import productReducer from './reducers/productReducer';

export const store = configureStore({
    reducer: {
        activeUser: userReducer,
        productList: productReducer,
    },
    middleware: [
        thunk,
        promiseMiddleware,
        promise,
        logger,
    ]
})