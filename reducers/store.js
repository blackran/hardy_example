import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '.';
import thunk from 'redux-thunk';

const middleware = [thunk];
const initState = {};
let store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...middleware)),
);

export default store;
