import {Router, Route, browserHistory} from 'react-router'
import Shop from './Shop/Shop'
import Add from './Add/Add'
import React from 'react'
import App from './App'
export default class Root extends React.Component {
	render(){
		return(
			<Router history={browserHistory}>
				<Route path='/' component={App}>
					<Route path = '/shop' component = {Shop} />
					<Route path = '/add' component = {Add} />
				</Route>
			</Router>
			)
	}
}