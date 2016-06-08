import React from 'react'

class Header extends React.Component {
	constructor(){
		super()
	}
	render(){
		let li = this.props.menu.map(function(item,id){
			return (
				<li key={id}>{item}</li>
				)
		})
		return(
			<header>
				<nav>
					<ul>
						{li}
					</ul>
					<div className="userInfo">
						<span>登录</span><span>|</span><span>注册</span>
					</div>
				</nav>
			</header>
			)
	}
}

export default Header