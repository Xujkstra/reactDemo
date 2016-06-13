import React from 'react'

export default class Add extends React.Component {
	render(){
		return(
			<div className='Add'>
				<button onClick = {this.props.actions.ADD}>+</button>
				<button onClick = {this.props.actions.MINUS}>-</button>
				<p>Result:{this.props.result}</p>
			</div>
			)
	}
}