import React, {useEffect, useState} from 'react'


// ๐ฅไธ๏ผprops ็จไบๅจ็ปไปถไน้ดไผ ๅผ๏ผ๏ผ, ๆฏๅฆๅญไผ ็ถ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
//็ปไปถ่ฎฐๅพๅคงๅ๏ผ
function BaseA(props) {

	const [title, setTitle] = useState('Title')

	return(
		// ๐ฅ่ฆ็ป็ปไปถๅ ๆ ทๅผๅช่ฝๆพๅจ return ็ html ้๏ผ๏ผ
		<div className="title">{title}
			<button onClick={()=>setTitle(props.title)} className='changeBtn'>๐</button>
		</div>
	)
}



//็ปไปถ่ฎฐๅพๅคงๅ๏ผ
function Title () {
	return(
		<BaseA title='โ๏ธ Todo List'/>
	)
}








// ไบ๏ผ๐ฅๅๅนถๅคไธช useState โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
function Profile() {
	const [info, setInfo] = useState({
		name:'jimmy',
		age:'27'
	})

	const changeInfo = () => {
		setInfo((preInfo) => { //๐ฅ๐ฅpreInfo ไธบไธ้ขๅ็ๅๅงๅผ
			const newInfo = {
				name:'jimmy',
				age:'27',
				hobby:'coding'
			}
			// return Object.assign(preInfo,newInfo) //๐ฅ๐ฅๅๅนถๅคไธช useState ็ๅฆไธไธชๆนๆณ
			return {...preInfo, ...newInfo}
		})
	}

	return(
		<div></div>
	)
}









// ไธ๏ผ๐ฅๆๅ ่ฝฝ, ๅจใๅๅงๅ useStateใ็ๆถๅๆพๅฅไธไธชใๅฝๆฐใ, ไปฅๅๆง่ฝไผๅ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
function ChildScore({score}) {

	function getScore(score) {//้ป่พไธๅบ่ฏฅๆฝ็ฆปๆๅทฅๅทๅฝๆฐ
		if(score >= 90 && score <100){ //้ป่พไธ
			return "A+"
		}else if (score < 90 && score >=60){
			return "B+"
		}else{
			return "C+"
		}
	}

	const [scoreClass,SetScore] = useState(()=>{
		const initialState = getScore(score) //๐ฅๅๅงๅๆถๆง่กไธไธชๅฝๆฐๆฅๅคๆญ่ฟๅๅผ
		return initialState //๐ฅ่ฟๅๅ ไธชๅผไนไธ:  A+ B+ C+
	})


	return(
		<>
			<h1>
				{console.log(scoreClass)}
				่่ฏๆ็ปฉ:{scoreClass}
			</h1>
		</>
	)
}


function FatherScore(){
	return(
		<ChildScore score='90'/>
	)
}






export default Title
export {Profile,FatherScore}


