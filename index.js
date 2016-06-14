import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Shopping from './reducer'
import * as action from './action'
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
let store = createStore(Shopping)
import App from './components/App.js'
import Add from './components/Add/Add'
import Shop from './components/Shop/Shop'

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Router path = '/' component={App}>
				<IndexRoute component={Add} />
				<Route path = '/shop' component = {Shop} />
			</Router>
		</Router>
	</Provider>,document.getElementById('root')
	)