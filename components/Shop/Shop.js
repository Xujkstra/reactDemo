import React from 'react'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../action'
class Shop extends React.Component {
	render(){
		const product = [
		  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
		  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
		  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
		]
		const {cartNum,goodList,onAddGood} = this.props
		let li = product.map(function(product,index){
			return (
				<li key={index}>
					<p>Title:{product.title}</p>
					<p>Price:{product.price}</p>
					<p>Inventory:{product.inventory}</p>
					<button onClick={() => onAddGood(index)}>Add To Cart</button>
				</li>
				)
		})
		let ShowList = goodList.length? goodList.join(" "):""
		return (

			<div>
				<Link to='/'>Go To HomePage</Link>
				<ul className='productList' >
					{li}
				</ul>
				<hr />
				<div>
					Your shopping cart:{cartNum}
				</div>
				<div>
					GoodList:{ShowList}
				</div>
			</div>
			)
	}
}

function mapState(state) {
	return {
		cartNum: state.cartNum,
		goodList: state.goodIDs
	}
}

function mapAction(dispatch) {
	return {
		onAddGood: (id) => {
			dispatch(actions.SHOP(id))
		}
	}
}

export default connect(
	mapState,
	mapAction)(Shop)