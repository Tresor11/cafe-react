import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import itemsReducer from './items';
import singleItemReducer from './singleItem';

const finalReducer = combineReducers({
  items: itemsReducer,
  single: singleItemReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;