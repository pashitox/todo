import React, { Component } from "react";
import TodoAdd from "./todoadd";


class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [{register: "hola, todos"},{register:"chao a todos"} ]
      };      
    }
      
    render() {   
      
      const todos = this.state.todos.map(todo => { return <TodoAdd register= {todo.register}/>} )

      return (
        <div className='TodoList'>
          <h5>
           Is de list !

           <lu>{todos}</lu> 

          </h5>
        </div>
      );
    }
}
  export default TodoList;