import React, { useState, useTransition, useDeferredValue } from 'react'
import getProductData from '../fakeData'
import '../styles/App.css'


// useTransition 核心是减少大量搜索场景下的渲染卡顿问题



export default function Tran() {
	const [searchText, setSearchText] = useState('')
	//🍎方法一,第 1 步:
	const [isPending, startTransition] = useTransition()



	//用计算最终要展示的产品数量
	const filterProducts = () => {
		if(!searchText){ //如果没有搜索词，就全部显示
			return getProductData()
		}else{ //如果有搜索词，就显示那一个
			return getProductData().filter(product => product.name.includes(searchText))
		}
	}
	// console.log(filterProducts())

	
	//🍊方法二,第 1 步: 让对应的数据进入慢速通道
	const defereedProducts = useDeferredValue(filterProducts())
	

	//获取输入框的值
	const handleFilter= (e) => {
		//🍎方法一,第 2 步:
		startTransition(()=>{ //🔥🔥把对实时性要求不高的操作放到这里
			setSearchText(e.target.value)
			// ... 🌟可以处理多个操作
		})
	}
	
	return (
		<div className="main">
			<div className="search">
				<input type="text" onChange={ handleFilter }  placeholder="搜索产品"/>
				{/* //🍎方法一,第 3 步: 正在输入中，会显示搜索中... */}
				{isPending && (<p>搜索中...</p>)}
			</div>
			<div className="container">
				{/* //🍎方法一,第 4 步: 渲染数据 */}
				{filterProducts().map((item,index) => {
					return <Product key={index} products={item}/>
				}) }

				{/* 🍊方法二,第 2 步: 让对应的数据进入慢速通道 */}
				{/* {defereedProducts.map((item,index) => {
					return <Product key={index} products={item}/>
				}) } */}
			</div>


		</div>
	)
}


const Product = ({products}) => {
	return(
		<div className="productShow">{products.name}</div>
	)
}

