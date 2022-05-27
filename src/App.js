import logo from './logo.svg';
import './App.css';

import TodoList from "./todolist";


function App() {

  

  return (
    <div >
      <header>
       <img src={logo} className="App-logo" alt="logo" />
        Learn React    
       </header>      
      <TodoList/>           
      </div>
  );
}

export default App;
