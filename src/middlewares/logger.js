// отправляем в консоле лог те данные которые отправили в диспач
// function logger (extraArgument){
//     return()=>(next)=>(action)=>{
// action=>(){}
//     }
// }

// export const logger = (store) => {
//     return (next)=>{
//         return (action)=>{
//
//         }
//     }
// }

export const logger = (store) => (next) => (action) => {
    // теперь прописываем логику midleware
    console.log('dispatching', action)
    console.log('before', store.getState()) // узнаем какое сторе в перед применением action
    let result = next(action); // читаем значение из диспач
    console.log('after', store.getState()) // вызываем состояние после action
    return result
}

// store аргумент наше хранилище
// Далее возвращаем следующую функцию в которая принимает аргумент next
// и она возвращает функцию которой передается action


