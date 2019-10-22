import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory as createHistory } from "history"
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";

export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk, routerMiddleware(history))
);

export function configStore(initialState = {}) {
	return createStore(
		rootReducer,
		initialState,
		enhancer
	);
}
