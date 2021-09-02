import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import {addCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch(); // чтобы изменить состояние нужен диспач, получаем его через хук
    const cash = useSelector((state) => state.cash.cash); // чтобы получить состояние нужно useSelector()
    const test = useSelector((state) => state.cash.test); // чтобы получить состояние нужно useSelector()
    const inputRef = useRef();
    const customers = useSelector((state) => state.customers.customers)

    // для изменения состояния нужен диспачь
    const addCash = (cash) => {
        dispatch(addCashAction(cash))
        setObj({cash: ''})
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }


    console.log(test, "-test")
    const initialObj = {
        cash: '',
    }
    const [obj, setObj] = useState(initialObj);

    const handleChange = (event) => {
        setObj({...obj, [event.target.name]: Number(event.target.value)})
    }

    const [name, setClient] = useState('');

    const handleChangeClient = (event) => {
        setClient(event.target.value)
    }
    const handleClickAddClient = (event) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer)) // вот так функцией можно заменить создание объекта
        setClient('')
    }
    const handleClickRemoveClient = (customer) => {
        dispatch({type: "REMOVE_CUSTOMER", payload: customer})
    }

    const inputClientRef = useRef()

    const handleClickAllClients = () => {
        // fetchCustomers() попадает в middleware
        dispatch(fetchCustomers())
    }

    return (
        <div className="app">
            <div>{cash}</div>
            <div style={{display: "flex"}}>
                <input ref={inputRef} name='cash' onChange={handleChange} value={obj.cash}/>
                <button onClick={() => addCash(obj.cash)}>Add</button>
                <button onClick={() => getCash(Number(prompt()))}>Minus</button>
            </div>

            <div>
                <label>
                    add client:
                    <input ref={inputClientRef} onInput={handleChangeClient} placeholder='enter client' value={name}/>
                </label>
                <button onClick={handleClickAddClient}>Add client</button>
                <button onClick={() => handleClickAllClients()}>Get clients from base</button>

            </div>

            <ul>
                {customers.length > 0 ? customers.map((customer, index) => (
                        <li style={{cursor: "pointer"}} onClick={() => handleClickRemoveClient(customer)}
                            key={index}>{customer.name}</li>
                    ))
                    : <div>No clients</div>
                }
            </ul>
            <div className={"laptop"} style={{
                width: 1440,
                background: "green"
            }}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA|</div>
            <div style={{width: "17px", background: "red", marginLeft: "auto", marginRight: 0,}}>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            v <div>|</div>
            <div>|</div>
            <div>|</div>
        </div>
    );
}

export default App;
