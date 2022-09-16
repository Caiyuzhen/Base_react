import React, {Component} from 'react'
import {getStorage,setStorage} from './utils/storage'



class TodoList extends Component {
	state = {
		inputValue: '',
		list: []
	}


	//🔥🔥在页面加载完成后，获取本地存储的数据
	componentDidMount() {
		this.setState({
			list: getStorage() || []
		})
	}


	//🔥🔥 方法一（需要 bind 绑定）: 直接定义函数
	setInputValue(e) { //⚡️⚡️获取 input 输入的值并赋值给 state！！！
		this.setState({
			inputValue: e.target.value //⚡️⚡️监听获取输入框内的值
		})
	}



	//🔥🔥 方法二：箭头函数，返回一个变量，这时候就不用修改 this 指向了
	//👇用 storage 的写法
	addItem = () => {
		const { inputValue } = this.state //⚡️⚡️先解构出最新的值！！

		// console.log(this.state.inputValue);
		this.setState({
			list: setStorage({
				id: new Date().getTime(),
				text: inputValue
			})
		})
	}



	removeItem(id) {
		//重新更新列表 state
		this.setState({
			list: setStorage(null,id)//第一个因为是要删除，所以传入 null
		})
	}


	//👇没用 storage 之前的写法⚡️⚡️
	// addItem = () => {
	// 	const { list,inputValue } = this.state //⚡️⚡️先解构出最新的值！！

	// 	const _obj = { //新建一个对象，用来存储 id 和 text，然后再 push 到 state 中
	// 		id: new Date().getTime(),//时间戳
	// 		text: inputValue
	// 	}

	// 	list.push(_obj)

	// 	// console.log(this.state.inputValue);
	// 	this.setState({
	// 		list
	// 	})
	// }



	//👇没用 storage 之前的写法⚡️⚡️
	// removeItem(id) {
	// 	const { list } = this.state

	// 	const newList = list.filter((item)=>{ //过滤掉 list 内的 id 与传入的 id 相同的选项
	// 		return (//返回的是不需要被删除的 id 的选项
	// 			item.id !== id 
	// 		)
	// 	})

	// 	//重新更新列表 state
	// 	this.setState({
	// 		list: newList
	// 	})
	// }

	

	render() {
		// 一般在 render 内会解构 list 数据
		const { list } = this.state

		return(
			<div className='wrapper'>
				<div className="inputBox">
					{/* 🔥🔥 方法一（需要 bind 绑定）：this.setInputValue.bind(this)  🔥表示把原本指向 input 的 this 改编为指向改为整个【类】,否则无法改变 state */}
					<input type='text'  onChange={ this.setInputValue.bind(this) }  placeholder='input something...'/>
					<button onClick={ this.addItem }> 添加 </button>
				</div>
				<div className="list-box">
					<div className="list">
						{
							//判断有没有 list，有则渲染
							list && list.map((item,index) => {
								return (
									<li key={ index }>
										<span>{ item.text }</span>
										{/* 传入 id 来删除对应 todo */}
										<button 
											//传入出当先选项的 id
											onClick={ this.removeItem.bind(this, item.id) }> 删除 </button>
									</li>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}


export default TodoList