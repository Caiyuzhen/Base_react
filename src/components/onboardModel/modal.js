import React, {useRef, forwardRef, useImperativeHandle} from 'react'
import './modal.css'



const Modal = ({open, title, onClose, children, ...rest}, ref) => { //记得返回 ref！！🔥onClose 事件由 App.js 这个父组件传递过来


	function handleClose(e){
		// 点击的这个元素的类名包含'modalContainer'
		if(e.target.className === 'modalContainer'){
			onClose()
		}
		return null
	}

	function handleCancel(){
		alert('取消')
		onClose()
	}

	function handleConfirm(){
		alert('确定')
		onClose()
	}

	//🌟🌟🌟第一步: 创建 ref 并绑定给元素
	const closeRef = useRef()
	const cancelRef = useRef()
	const confirmRef = useRef()


	//🌟🌟🌟第二步: 包裹需要向外暴露子组件的 ref 数据, 用一个数组承载多个方法
	useImperativeHandle(ref,()=>{//👈记得要把 ref 传递给 useImperativeHandle
		return {
			tips:[//🔥🔥popover 要展示的内容
				{	//👇可以获取三个子组件 ref 实例的位置信息传给父组件！！
					//getBoundingClientRect() 为元素到浏览器可视范围的距离, 分别有 top,lef,right,bottom,width,height
					text: '👇点击此处关闭窗口',
					position:()=>closeRef.current.getBoundingClientRect(),//🔥让【父元素】能够定位在【子元素】的附近！！
					action:()=>{closeRef.current.focus()} //🔥让子元素显示聚焦一圈的⭕️状态 (自己定义聚焦样式)
					// action:()=>{closeRef.current.style.border='solid 4px #3370FF'} //🔥让子元素显示一圈聚焦的⭕️状态 (自己定义聚焦样式)
				},
				{
					text: '点击此处取消并关闭窗口',
					position:()=>cancelRef.current.getBoundingClientRect(),
					action:()=>{cancelRef.current.focus()}//🔥取消聚焦的⭕️状态 (focus（）为系统自带的)
				},
				{
					text: '点击此处取确认并关闭窗口',
					position:()=>confirmRef.current.getBoundingClientRect(),
					action:()=>{confirmRef.current.focus()}
				},
			],
		}
	},[])

	
	if(open){//🔥条件渲染, open 由父组件传入
		return (
			// modalContainer 为遮罩底色, 点击后可关闭弹窗
			<div className="modalContainer" onClick={handleClose}>
				<div className="modal">
					<div className="modal__head">
						<h2>{title}</h2>
						<button className="modal__close" onClick={onClose} ref={closeRef}> X </button>
					</div>

					{children}

					<div className="modal__foot">
						<button className="btn-cancel" onClick={handleCancel} ref={cancelRef}>取消</button>
					
						{""}
						<button className="btn-confirm" onClick={handleConfirm}  ref={confirmRef}>确定</button>
					</div>
				</div>
			</div>
		)
	} return null
}


//🌟🌟🌟第三步: 用 forwardRef 包裹组件
// export default React.forwardRef(Modal)
export default forwardRef(Modal)





