import logo from './logo.svg';
import './App.css';

import './TodoForm.css';

import TodoList from "./todolist";


function App() {

  

  return (
    <div >
      <header>
       <img src={logo} className="App-logo" alt="logo" />
        Learn React    
       </header>
       <body>      
      <TodoList/> 
      </body>          
      </div>
  );
}

export default App;
