import { createStore, applyMiddleware } from 'redux';
import UsersReducer from '../reducers/users_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const configureStore = (preloadedState = {}) =>(
  createStore(
    UsersReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
