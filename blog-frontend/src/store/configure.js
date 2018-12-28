import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// Development mode

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const componseEnhancers = devtools || compose;

// server side lendering initial state
const configure = (preloadedState) => createStore(reducers, preloadedState, componseEnhancers(
  applyMiddleware(...middlewares)
));

export default configure;