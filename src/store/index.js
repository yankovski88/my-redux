import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from './customerReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {logger} from "../middlewares/logger";


// объединили редьюсеры
const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))) // создали store хранилище состояния, thunk
// чтобы работать одновременно инструментами разработчика и middleware установим npm i redux-devtools-extension

