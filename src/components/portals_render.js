import React, { } from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'


/*
🌞 Portals 能够把子组件渲染到父组件以外的 DOM 节点
	先渲染组件，然后在 return 的时候加上 ReactDOM.createPortal , 然后在【,】后边写上要挂载的【原生 DOM 即可】
	注意，不能用 React 虚拟 DOM， 但本质上还是挂载到 React 虚拟 DOM
	场景： Dialog、Popover 等
*/



//父组件
class Sub extends Component {
	render() {
		return(
			//🌞子组件的事件会冒泡给父组件
			<div> <button>CLick</button> </div>
		)
	}
}




//子组件
class Main extends Component {
	state = {count:0}

	handleClick = () => {
		this.setState(state => ({
			count: state.count + 1
		}))
	}

	render() {
		return ReactDOM.createPortal(
			<div onClick={this.handleClick}>
				<p>🌞count:{this.state.count}</p>
					{/* 👇子组件的事件冒泡会传递给父组件 */}
					<Sub/>
			</div>,
			document.body
		)
	}
}




export {
	Main
}



