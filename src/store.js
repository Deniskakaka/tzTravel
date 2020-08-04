import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import  mainReduser  from "./redux/mainReduser.js";
import thunk from 'redux-thunk';

const reducer = combineReducers({
	mainStore: mainReduser
});

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;