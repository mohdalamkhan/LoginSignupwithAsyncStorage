import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  auth: authReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk), // Add your middleware as needed
  ),
);

export default store;
