import React, { createRef } from 'react'

//🌟用 Ref 拿到原生 DOM 来操作, 会创建一个 current 属性，用来存储 DOM 元素

export default function Ref () {

	const inputRef = createRef()

	const focusFn = () => {
		console.log(inputRef.current)//此时已经获得了原生 input DOM
		inputRef.current.focus() //⚡️⚡️⚡️把焦点放到 input 上，相当于 document.getElementById('input').focus()
	}

	return(
		<div id='DD'>
			{/* 绑定 ref 到原生 DOM 上 */}
			<input type="text" placeholder="input..." ref={inputRef}/>
			<button onClick={ focusFn }>点我聚焦输入框</button>
		</div>
	)
}



