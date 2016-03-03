import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore } from 'redux';

let store = createStore( null );

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);