import './styles/App.css';
import TodoList from './components/classComponent';
import TodoList2 from './components/functionComponent';
import Title,{FatherScore} from './components/propsStudy';
import Tran from './components/useTransition'
import ExampleContext from './components/useContext/useContext01'
import {HomePage} from './components/useContext/homePageContext'



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
    </div>
  );
}


export default App;
