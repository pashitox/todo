import React, { Component } from "react";
import TodoAdd from "./todoadd";
import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [{register: "hola, todos", date:"12.12.2020" },{register:"chao a todos",date:"13/13/2023"} ]
      };  
      
      this.crear = this.crear.bind(this)
    }

    crear(rgt){
      this.setState({        
      todos:[rgt,...this.state.todos]
     });
    }
      
    render() {   
      
      const todos = this.state.todos.map(todo => { return <TodoAdd register= {todo.register} Date={todo.date}/>} )

      return (
        <div>
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