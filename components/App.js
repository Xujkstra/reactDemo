import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actions from '../action'
import Add from './Add/Add'
import Shop from './Shop/Shop'
export default class App extends React.Component {
	render(){
		const {result,actions} = this.props
		return (
			<div>
				<p>This is a react && react-router && redux sample</p>
				{this.props.children}
			</div>
			)
	}
}