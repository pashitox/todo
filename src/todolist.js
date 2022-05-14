import React, { Component } from "react";
import TodoAdd from "./todoadd";
import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [{register: "hola, todos", Date:12/12/2020},{register:"chao a todos",Date:13/13/2023} ]
      };  
      
      this.crear = this.crear.bind(this)
    }

    crear(rgt){
      this.setState({        
      todos:[...this.state.todos, rgt]
     });
    }
      
    render() {   
      
      const todos = this.state.todos.map(todo => { return <TodoAdd register= {todo.register} Date={todo.Date}/>} )

      return (
        <div className='TodoList'>
          <h5>
          <TodoForm AddNew = {this.crear}/>
          Is de list !
          </h5>
         <lu>{todos}</lu> 

         
        </div>
      );
    }
}
  export default TodoList;