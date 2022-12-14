import React, {Component} from 'react'
import {getStorage,setStorage} from './utils/storage'



class TodoList extends Component {
	state = {
		inputValue: '',
		list: []
	}


	//ð¥ð¥å¨é¡µé¢å è½½å®æåï¼è·åæ¬å°å­å¨çæ°æ®
	componentDidMount() {
		this.setState({ //class ç»ä»¶ä¸­ç setState éè¦ç¨ this
			list: getStorage() || []
		})
	}


	//ð¥ð¥ æ¹æ³ä¸ï¼éè¦ bind ç»å®ï¼: ç´æ¥å®ä¹å½æ°
	setInputValue(e) { //â¡ï¸â¡ï¸è·å input è¾å¥çå¼å¹¶èµå¼ç» stateï¼ï¼ï¼
		this.setState({
			inputValue: e.target.value //â¡ï¸â¡ï¸çå¬è·åè¾å¥æ¡åçå¼
		})
	}



	//ð¥ð¥ æ¹æ³äºï¼ç®­å¤´å½æ°ï¼è¿åä¸ä¸ªåéï¼è¿æ¶åå°±ä¸ç¨ä¿®æ¹ this æåäº
	//ðç¨ storage çåæ³
	addItem = () => {
		const { inputValue } = this.state //â¡ï¸â¡ï¸åè§£æåºææ°çå¼ï¼ï¼

		// console.log(this.state.inputValue);
		this.setState({
			list: setStorage({
				id: new Date().getTime(),
				text: inputValue
			})
		})
	}



	removeItem(id) {
		//éæ°æ´æ°åè¡¨ state
		this.setState({
			list: setStorage(null,id)//ç¬¬ä¸ä¸ªå ä¸ºæ¯è¦å é¤ï¼æä»¥ä¼ å¥ null
		})
	}


	//ðæ²¡ç¨ storage ä¹åçåæ³â¡ï¸â¡ï¸
	// addItem = () => {
	// 	const { list,inputValue } = this.state //â¡ï¸â¡ï¸åè§£æåºææ°çå¼ï¼ï¼

	// 	const _obj = { //æ°å»ºä¸ä¸ªå¯¹è±¡ï¼ç¨æ¥å­å¨ id å textï¼ç¶åå push å° state ä¸­
	// 		id: new Date().getTime(),//æ¶é´æ³
	// 		text: inputValue
	// 	}

	// 	list.push(_obj)

	// 	// console.log(this.state.inputValue);
	// 	this.setState({
	// 		list
	// 	})
	// }



	//ðæ²¡ç¨ storage ä¹åçåæ³â¡ï¸â¡ï¸
	// removeItem(id) {
	// 	const { list } = this.state

	// 	const newList = list.filter((item)=>{ //è¿æ»¤æ list åç id ä¸ä¼ å¥ç id ç¸åçéé¡¹
	// 		return (//è¿åçæ¯ä¸éè¦è¢«å é¤ç id çéé¡¹
	// 			item.id !== id 
	// 		)
	// 	})

	// 	//éæ°æ´æ°åè¡¨ state
	// 	this.setState({
	// 		list: newList
	// 	})
	// }

	

	render() {
		// ä¸è¬å¨ render åä¼è§£æ list æ°æ®
		const { list } = this.state

		return(
			<div className='wrapperTwo'>
				<div className="inputBox">
					{/* ð¥ð¥ æ¹æ³ä¸ï¼éè¦ bind ç»å®ï¼ï¼this.setInputValue.bind(this)  ð¥è¡¨ç¤ºæåæ¬æå input ç this æ¹ç¼ä¸ºæåæ¹ä¸ºæ´ä¸ªãç±»ã,å¦åæ æ³æ¹å state */}
					<input type='text'  onChange={ this.setInputValue.bind(this) }  placeholder='input something...'/>
					<button onClick={ this.addItem }  className='addButton'> æ·»å  </button>
				</div>
				<div className="list-box">
					<div className="list">
						{
							//å¤æ­ææ²¡æ listï¼æåæ¸²æ
							list && list.map((item,index) => {
								return (
									<li key={ index }>
										<span>{ item.text }</span>
										{/* ä¼ å¥ id æ¥å é¤å¯¹åº todo */}
										<button 
											//ä¼ å¥åºå½åéé¡¹ç id
											onClick={ this.removeItem.bind(this, item.id) }  className="removeBtn"> å é¤ </button>
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