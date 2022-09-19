import {useRef, forwardRef, useImperativeHandle} from 'react'

/*
	🌟核心是【父组件】如何去控制【子组件】的 ref
		让子组件暴露出来的 ref 可以被父组件控制，需要结合 forwardRef 来使用

*/

//子组件
const Register = forwardRef(({},ref) => {

	const userNameRef = useRef()
	const passwordRef = useRef()
	
	//🌟🌟🌟包裹需要向外暴露子组件的 ref 
	useImperativeHandle(ref,()=>{
		return {
			userNameRef,
			passwordRef
		}
	},[])//无依赖项

	return (
		<div>
			{/* 阻止提交表单后的默认刷新行为 */}
			<form onSubmit={(e)=>e.preventDefault()}>
				<input type="text" name="username" placeholder="用户名" ref={userNameRef}/>
				<input type="password" name="username" placeholder="密码" ref={passwordRef}/>
				<button >👉注册</button>
			</form>
		</div>
	)
})

// 🌟如果是导出组件的话，则是 export default forwardRef(Register)




//父组件
export const MainRegister = () => {

	const registerRef = useRef()

	return(
		<div>
			<button 
				// 聚焦激活
				onMouseEnter={()=>{registerRef.current.userNameRef.current.focus()}}
				onMouseLeave={()=>{registerRef.current.userNameRef.current.blur()}}
				// 点击激活
				onClick={
					()=>{registerRef.current.passwordRef.current.focus()}
				}
			>点击父组件聚焦到子组件的 ref</button>
			<Register ref={registerRef}/>
		</div>
	)
}


