import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from "./Reducers";
import thunk from 'redux-thunk'

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//
// )

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)
export default store