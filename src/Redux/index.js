import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from "./Reducers";
import thunk from 'redux-thunk'

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

store.subscribe(() => {
    saveState(store.getState())
})

export default store

// const loadState = () => {
//     try {
//         const RState = localStorage.getItem("state")
//         if (RState === null) {
//             return undefined;
//         }
//         return JSON.parse(RState)
//     } catch (e) {
//         console.log(e)
//         return undefined
//     }
// }

const saveState = (state) => {
    try {
        const JState = JSON.stringify(state)
        localStorage.setItem("state", JState)
    } catch (e) {
        console.log(e)
    }
}
