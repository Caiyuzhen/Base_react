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



function App() {
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
    </div>
  );
}


export default App;
