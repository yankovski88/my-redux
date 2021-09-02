// action = {type: '', payload: ''} // type обязательно по нему будем определять как состояние будет меняться

const defaultState = { // создали дефолтное состояние при открытии приложения
    cash: 0,
    test: 'test',
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

// action это получить деньги, положить деньги
export const cashReducer = (state = defaultState, action) => { // состояние обновляется и хранится в store
    switch (action.type) {
        case ADD_CASH: {
            return {...state, cash: state.cash + action.payload} // ...state состояние неизменяемое и его нужно возвращать
        }
        case GET_CASH: {
            return {...state, cash: state.cash - action.payload}
        }
        default : {
            return state // обязательно возвращаем по дефолту состояние
        }
    }
}

export const addCashAction = (payload)=>({type: ADD_CASH, payload});
export const getCashAction = (payload)=>({type: GET_CASH, payload});

