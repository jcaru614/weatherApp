import reducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));

export default store;