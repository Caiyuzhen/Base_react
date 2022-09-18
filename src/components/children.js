import React, { } from 'react'


//🌟方法一：用 children 来定位渲染在组件的哪个位置
function Fancy(props) {
	return (
		<div className={'Fancy' + props.color}>
			{props.children}
		</div>
	)
}

//使用 children 包裹
function Dialog() {
	return(
		<Fancy color="blue">
			<h1>Welcone</h1>
			<p>Thank you for visiting our spacecraft!</p>
		</Fancy>
	)
}



//🌟方法二：用【更细致的判断】来定位渲染在组件的哪个位置
function Fancy2 (props) {

	//可以通过【解构赋值】展开多个 props 参数
	const {top,msg,down,...other} = props

	return (
		<>
			<div>{props.top}</div>
			<p>{props.msg}</p>
			<div>{props.down}</div>
		</>
	)
}

//使用【自闭合组件】加【 props 参数】判断子元素的渲染位置
function Popover() {
	return(
		<Fancy2 
			top={<Contact/>} 
			msg="hello"
			down={<Chat/>}
		/>
	)
}

function Contact() {}
function Chat() {}
