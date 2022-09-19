import './styles/App.css';
import TodoList from './components/classComponent';
import TodoList2 from './components/functionComponent';
import Title,{FatherScore} from './components/propsStudy';
import Tran from './components/useTransition'
import ExampleContext from './components/useContext/useContext01'
import {HomePage} from './components/useContext/homePageContext'
import Counter from './components/useReducer'
import Ref from './components/ref'
import {Main} from './components/portals_render'
import {MainRegister} from './components/useImperativeHandle'
import Onboard from './components/onboardModel/onboard'
import {useRef,useState} from 'react'


function App() {
  const [open ,setOpen]=useState(false)

  return (
    <div className="App">
		<Title />
		<TodoList />
		<TodoList2 />
		<FatherScore/>
		<Tran />
		<ExampleContext />
		<HomePage />
		<Counter />
		<Ref />
		<Main />
		<MainRegister />
		<Onboard open={open} onClose={()=>setOpen(false)} />
		<button onClick={()=>setOpen(true)}>🪟打开弹窗</button>
    </div>
  );
}


export default App;
