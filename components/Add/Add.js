import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../action'
export default class Add extends React.Component {
	render(){
		return(
			<div className='Add'>
				<button  >+</button>
				<button  >-</button>
				<p>Result:</p>
			</div>
			)
	}
}

// function mapStateToProps(state){
// 	return {
// 		result: state.result
// 	}
// }

// function mapDispatchToProps(dispatch){
// 	return {
// 		actions: bindActionCreators(actions, dispatch)
// 	}
// }

// export default connect({
// 	mapStateToProps,
// 	mapDispatchToProps
// })(Add)