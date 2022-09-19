import React, {useRef, useState} from 'react'
import Modal from '../onboardModel/modal'  
import './modal.css'   



export default function Onboard ({open, onClose}) {

	//🌟🌟🌟第四步: 在父组件内也声明 ref
	const modalRef = useRef()
	const [step, setStep] = useState(-1) //onboard 的步骤


	return (
		//🌟🌟🌟第五步: 把父组件的 【modalRef】 ref 传递给【子组件的 ref props】 , 然后便可以引用子组件的 ref 了】
																// 🔥既定把子元素的 ref 属性绑定给父元素
		<Modal title="🤙 新手引导"  open={open}   onClose={onClose}  ref={modalRef}>

			{/* 引导第 1 步 */}
			{step < 0 && (
				<button 
					//🌟🌟🌟第六步: 调用子组件暴露的方法
					onClick={()=>{setStep(0);  modalRef.current.tips[0].action()}}//第一步引导执行后, 换为 0 , 下次
					className="btn-onboardStart"
				>开始引导</button>
			)}

			{/* 引导第 2 步 */}
			{step >= 0 && (
				<div className="tip" 
					 style={{
					 position: "absolute",
					 // 👇基于 ref 选中的元素进行偏移
					 top: `${modalRef.current.tips[step].position().top - 60}px`,//【modalRef.current】为父组件中 popover 的 ref, 然后再使用 子组件 的 ref 作为它的【🔥位置属性】, 在此之前基础上进行偏移！！
					 left: `${modalRef.current.tips[step].position().left}px`,
				}}>
					{/* 显示第 2 步 的 popover 文字*/}
					{modalRef.current.tips[step].text} 
					<button 
						style={{ padding: "6px", marginLeft: "10px",  border: "none", borderRadius: 6}}
						onClick={()=>{
							if(step < modalRef.current.tips.length - 1){ //step < 2 (最大值)
								setStep((pre)=>{
									modalRef.current.tips[pre + 1].action() //获取对应选项的值
									return pre + 1 //每次 + 1, 从 0 到 1 (如何加，加到👆的最大值)
								})
							}else{
								setStep(-1)//超过最大值后,  变为 -1（初始值）
								onClose()//超过最大值后,  关闭弹窗
							}
						}}
					>知道了</button>
				</div>
			)}
		</Modal>
	)
}

