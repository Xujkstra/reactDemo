const initState = {
	result: 0
}

export default function handleShopping(state = initState, action) {
	switch(action.type) {
		case 'ADD':
			return Object.assign({},{
				result: state.result+1
			})
			break

		case 'MINUS':
			return Object.assign({},{
				result: state.result-1
			})
			break

		default:
			return state
	}
}