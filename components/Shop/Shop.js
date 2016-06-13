import React from 'react'
export default class Shop extends React.Component {
	render(){
		const product = [
		  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
		  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
		  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
		]
		let li = product.map(function(product,index){
			return (
				<li key={index}>
					<p>Title:{product.title}</p>
					<p>Price:{product.price}</p>
					<p>Inventory:{product.inventory}</p>
					<button>Add To Cart</button>
				</li>
				)
			
		})
		console.log(li)
		return (
			<div>
				<ul className='productList' >
					{li}
				</ul>
				<hr />
				<div>
					Your shopping cart:
				</div>
			</div>
			)
	}
}

