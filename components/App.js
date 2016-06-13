import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from '../action'
import Add from './Add/Add'
import Shop from './Shop/Shop'
class App extends React.Component {
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

function mapStateToProps(state){
	return{
		result: state.result
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)