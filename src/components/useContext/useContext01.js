import React, { createContext, useContext, useState } from 'react'

//🌞本质上是为了跨组件的传递数据，避免 props drilling 层层传递的现象



const UserContext = createContext('Zen')


export default function ExampleContext () {
	const [name, setName] = useState('Jimmy')
	return (
		//⚡️⚡️包裹要传递的数据, 用 value 把要传递的【name属性】跟【setName方法】包裹起来！！
		<UserContext.Provider value={ {name,setName} }>
			<div>
				父组件{ name }
				<Example02 setUserName={setName}/>
			</div>
		</UserContext.Provider>
	)
}

const Example02 = () => {
// const Example02 = ({setUserName}) => { //🍎不包裹属性就要额外传递
	return (
		<div>
			子组件
			{/* <Example03 setUserName={setUserName}/> */}
			<Example03 />
		</div>
	)
}


const Example03 = () => {
	// const Example03 = ({setName}) => { //🍎不包裹属性就要额外传递
	const {setName} = useContext(UserContext)//🍊获取父组件传递下来的值！
	return (
		<div>
			孙组件
			<button onClick={ ()=>{setName('Kim')} }>修改名字</button>
		</div>
	)
}