import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import {persistence} from './middlewares'
import App from './containers/App'

let initialState = localStorage.getItem('burnout-current-state')

initialState = (typeof initialState == 'string') ? JSON.parse(initialState) : undefined

let createStoreWithMiddleware = applyMiddleware(persistence)(createStore)
let store = createStoreWithMiddleware(todoApp, initialState);

let rootEl = document.getElementById('react-mount-point');

render( 
	<Provider store={store}>
		<App />
	</Provider>, 
	rootEl
);
