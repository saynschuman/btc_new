import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(() => 0, {}, enhancer);

export default store;
