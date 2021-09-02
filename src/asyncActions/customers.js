import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => { // Для того чтобы использовать функцию как экшен и прокидывать ее в диспач
    return (dispatch) => { // мы должны из этой функции вернуть другую функцию параметр которой она принимает диспач
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => (dispatch(addManyCustomersAction(json))))
    }
}
