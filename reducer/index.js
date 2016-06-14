import update from 'react-addons-update'

const initState = {
	result: 0,
	cartNum: 0,
	goodIDs:[]
}

export default function handleShopping(state = initState, action) {
	switch(action.type) {
		case 'ADD':
			return Object.assign({},state,{
				result: state.result+1
			})
			break

		case 'MINUS':
			return Object.assign({},state,{
				result: state.result-1
			})
			break

		case 'SHOP':
			if(state.goodIDs.indexOf(action.productID) === -1){
				return update(state,{
					goodIDs:{$push:[action.productID]},
					cartNum:{$set:state.cartNum+1}
				})
			}else {
				return state
			}
			break;
		default:
			return state
	}
}