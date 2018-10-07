import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import certificateAbacus from './components/certificate_abacus.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/certificates/abacus-english" component={certificateAbacus} />
			<Route path="/" component={App} />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
