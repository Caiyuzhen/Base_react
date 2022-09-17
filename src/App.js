import './styles/App.css';
import TodoList from './components/classComponent';
import TodoList2 from './components/functionComponent';


function App() {
  return (
    <div className="App">
		<div className="title">✏️ Todo List</div>
		<TodoList />
		<TodoList2 />
    </div>
  );
}

export default App;
