import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Shopping from './reducer'
import * as action from './action'
import Root from './components/Root'
let store = createStore(Shopping)

render(
	<Provider store={store}>
		<Root />
	</Provider>,document.getElementById('root')
	)