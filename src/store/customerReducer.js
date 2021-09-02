const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => { // состояние обновляется и хранится в store
    switch (action.type) {
        case ADD_MANY_CUSTOMERS: {
            console.log(action.payload)
            return {...state, customers: [...state.customers, ...action.payload]}
        }
        case ADD_CUSTOMER: {
            return {...state, customers: [...state.customers, action.payload]} // ...state состояние неизменяемое и его нужно возвращать
        }
        case REMOVE_CUSTOMER: {
            return {...state, customers: state.customers.filter((customer) => customer.id !== action.payload.id)}
        }
        default : {
            return state // обязательно возвращаем по дефолту состояние
        }
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
