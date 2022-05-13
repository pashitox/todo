import logo from './logo.svg';
import './App.css';
import TodoList from "./todolist";


function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
          Learn React
          
          <TodoList/>           

      </header>
    </div>
  );
}

export default App;
