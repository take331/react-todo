import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState(
    [{id: 1, name: "todo1", completed: false}]
  );

  return (
    <div className="App">
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Task</button>
      <button>Clear Task</button>
      <div>Remaining tasks: 0</div>
    </div>
  );
}

export default App;
