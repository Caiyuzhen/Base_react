import React, { createContext, useContext, useState } from 'react'

//真实场景, 封装登录注册的组件


//🔥创建 context, 并导出
export const UserContext = createContext(null)


//🔥导出用户登录状态, 包裹 children ！！
export const Login = ({children}) => {

	const [userInfo, setUserInfo] = useState(null),
		  [isAuth, setIsAuth] = useState(null)

	const login = () => {
		setTimeout(() => {
			//...还要发送一个后端 api 请求，这个例子就省略了
			setUserInfo({userName:'zen', status: true}) 
			setIsAuth(true) //已登录
		},500)//在 500ms// 后会返回一个用户信息
	}

	const logOut = () => {
		setTimeout(() => {
			//...还要发送一个后端 api 请求，这个例子就省略了
			setUserInfo(null) 
			setIsAuth(false) //未登录
		},500)//在 500ms 后会返回一个用户信息
	}

	return (
		<UserContext.Provider value={{login,logOut,userInfo,isAuth}}>
			{/* 👇 放入子组件来获取包裹的数据 */}
			{children} 
		</UserContext.Provider>)
}