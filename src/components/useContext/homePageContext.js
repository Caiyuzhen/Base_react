import React, { createContext, useContext, useState } from 'react'
import{Login, UserContext} from './loginContextHook'




export const HomePage = () => {
	return(
		<>
			<Login>
				<Header />
				<Content />
				<Footer />
			</Login>

		</>
	)
}



export const Header = () => {
	// 🔥🔥这里就能解构出 【登录组件】的数据了！！
	const {userInfo,isAuth,login,logOut} = useContext(UserContext)
	return (
		<header>
			头部
			<h1>
				{/* 根据登录状态判读 UI, 调用 context 解构出来的 logOut 登出方法！！ */}
				{isAuth ? 
					<>你好
						{userInfo.userName} 
						<button onClick={()=>logOut()}>登出</button>
					</> :
					<>请登录 
						<button onClick={()=>login()}>登录</button>
					</>
				}
			</h1>
		</header>
		)
}

export const Content = () => {
	return <div>主体内容</div>
}

export const Footer = () => {
	return <footer>页尾</footer>
}


