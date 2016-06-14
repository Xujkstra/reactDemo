import React from 'react'
import * as actions from '../../action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from'react-router'
class AddContainer extends React.Component {
	render(){
		const {result,actions} = this.props
		return(
			<div className='Add'>
				<Link to='/shop'>Go To Shop.</Link><br />
				<button  onClick={actions.ADD}>+</button>
				<button  onClick={actions.MINUS}>-</button>
				<p>Result:{result}</p>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		result: state.result
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

const Add = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddContainer)

export default Add