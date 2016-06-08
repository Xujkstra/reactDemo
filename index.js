import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			like: true
		}
	}

	handleClick(){
		console.log('clicked...')
		this.setState({
			like: !this.state.like
		})
	}

	componentDidMount(){
		console.log(this.props.menu)
	}
	render(){
		return (
			<div>
				<Header menu = {this.props.menu}/>
				<Home />
				<Footer />
			</div>
			)
	}
}

let menu = ['主页','A','B','C','D'];

render(
	<App menu={menu}/>,document.getElementById('root')
	)
