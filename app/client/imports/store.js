import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const store = createStore(
    combineReducers(reducers),
    window.devToolsExtension && window.devToolsExtension()
);


export default store;
