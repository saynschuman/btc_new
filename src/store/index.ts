import { createStore, applyMiddleware } from "redux"
import redusers from "./reducer"
import thunk from 'redux-thunk'
import { Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import IStore from "./storeTypes"

function configureStore() {
    const middlewares = [thunk]
    const store = createStore(
        redusers,
        composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store
}

export const store: Store<IStore> = configureStore()
