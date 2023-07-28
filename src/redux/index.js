import { applyMiddleware, createStore,compose } from "redux";
import rootReducers from "./RootReducers";
import thunk from "redux-thunk";

export const store= createStore(rootReducers,compose(
    applyMiddleware(thunk),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())|| compose
))