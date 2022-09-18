import React, { useReducer } from 'react'


function ReducerFn(state, action) { //reducer 能传入两个参数，state 和 action
  switch (action.type) { //创建几个 state 的 type
    case 'increment': 
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error();
  }
}


const initialState = 0 //初始值为 0


export default function Counter() {
	//🌞【initialState 为初始值】
	//【state 存储数据
	//【dispatch】根据【action】内的【type】来触发【改变 state 的方法】
	const [state, dispatch] = useReducer(ReducerFn, {count:initialState});
	return (
	  <>
		Count: {state.count}
		<button onClick={() => dispatch({type: 'decrement'})}> - </button>
		<button onClick={() => dispatch({type: 'increment'})}> + </button>
	  </>
	);
  }