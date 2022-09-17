import React, {useEffect, useState} from 'react'


// 🔥一：props 用于在组件之间传值！！, 比如子传父 ——————————————————————————————————————————
//组件记得大写！
function BaseA(props) {

	const [title, setTitle] = useState('Title')

	return(
		// 🔥要给组件加样式只能放在 return 的 html 里！！
		<div className="title">{title}
			<button onClick={()=>setTitle(props.title)} className='changeBtn'>🔄</button>
		</div>
	)
}



//组件记得大写！
function Title () {
	return(
		<BaseA title='✏️ Todo List'/>
	)
}








// 二：🔥合并多个 useState ——————————————————————————————————————————
function Profile() {
	const [info, setInfo] = useState({
		name:'jimmy',
		age:'27'
	})

	const changeInfo = () => {
		setInfo((preInfo) => { //🔥🔥preInfo 为上面写的初始值
			const newInfo = {
				name:'jimmy',
				age:'27',
				hobby:'coding'
			}
			// return Object.assign(preInfo,newInfo) //🔥🔥合并多个 useState 的另一个方法
			return {...preInfo, ...newInfo}
		})
	}

	return(
		<div></div>
	)
}









// 三：🔥懒加载, 在【初始化 useState】的时候放入一个【函数】, 以做性能优化 ——————————————————————————————————————————
function ChildScore({score}) {

	function getScore(score) {//逻辑上应该抽离成工具函数
		if(score > 90 && score <100){ //逻辑且
			return "A+"
		}else if (score < 90 && score >60){
			return "B+"
		}else{
			return "C+"
		}
	}

	const [scoreClass,SetScore] = useState(()=>{
		const initialState = getScore(score) //🔥初始化时执行一个函数来判断返回值
		return initialState //🔥返回几个值之一:  A+ B+ C+
	})


	return(
		<>
			<h1>
				{console.log(scoreClass)}
				考试成绩:{scoreClass}
			</h1>
		</>
	)
}


function FatherScore(){
	return(
		<ChildScore score='80'/>
	)
}






export default Title
export {Profile,FatherScore}


