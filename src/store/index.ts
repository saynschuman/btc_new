import { createStore, applyMiddleware } from "redux"
import redusers from "./reducer"
import thunkMiddleware from 'redux-thunk'
import { Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import IStore from "./storeTypes"

function configureStore() {
    const middlewares = [thunkMiddleware]
    const store = createStore(
        redusers,
        composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store
}

export const store: Store<IStore> = configureStore()
