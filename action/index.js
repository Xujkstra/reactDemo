export function ADD() {
	return {
		type: 'ADD'
	}
}

export function MINUS(){
	return{
		type: 'MINUS'
	}
}

export function SHOP(productID){
	return {
		type: 'SHOP',
		productID
	}
}