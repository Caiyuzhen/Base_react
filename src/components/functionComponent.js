import React, {useState,useEffect} from 'react'
import {getStorage,setStorage} from './utils/storage'



function TodoList2 () {

	const [list,setList] = useState([]), //[] 为默认值, 是个空数组
		 [inputValue, setInputValue] = useState(''), //'' 为默认值
		 [ name, setName ] = useState('myTodoList')


	//浏览器 tab
	useEffect(()=>{
		document.title = name
	},[name])//只要 name 被 setName 了，就一直执行


	//初始化时先获取 localStorage 的数据
	useEffect(()=>{
		setList(getStorage('list') || []);
	},[])


	function addItem () {
		setList(setStorage({ //需要两个参数，可以传入一个对象
			text: inputValue,
			id: new Date().getTime()
		}))
	}
		
	function removeItem (id) {
		setList(setStorage( //需要两个参数
			null,
			id
		))
	}

	return (
		<div className='wrapperOne'>
			<div className="inputArea">
				<input type="text" onChange={ (e)=>setInputValue(e.target.value) }  placeholder='input something'/>
				{/* <input type="text" onChange={ (e)=>setName(e.target.value) }/> */}
				<button onClick={ addItem }  className="addButton">添加</button>
			</div>
			<div className="todoList-box">
				{list && list.map((item,index)=>{
					return(
						<li key={index}> 
							{/* list 的 text*/}
							<span>{ item.text }</span>
							{/* 要删除的 list 的 id*/} 
							<button onClick={ (id)=>removeItem(item.id) }  className='removeBtn'>删除</button>
						</li>
					)
				})
				}
			</div>
		</div>
	)
}


export default TodoList2