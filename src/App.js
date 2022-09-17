import './styles/App.css';
import TodoList from './components/classComponent';
import TodoList2 from './components/functionComponent';
import Title,{FatherScore} from './components/propsStudy';



function App() {
  return (
    <div className="App">
		<Title />
		<TodoList />
		<TodoList2 />
		<FatherScore/>
    </div>
  );
}


export default App;
