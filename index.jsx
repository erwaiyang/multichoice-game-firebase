import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
);