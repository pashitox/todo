import React, { Component } from "react";
import TodoAdd from "./todoadd";
import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [{id:"asdf", register: "hola, todos", date:"12.12.2020" },{id:"qwertfg", register:"chao a todos",date:"13/13/2023"} ]
      };  
      
      this.crear = this.crear.bind(this);
      this.remove =this.remove.bind(this);
    }

    crear(rgt){          
      this.setState({        
      todos:[rgt,...this.state.todos]
     });
    }
 
 remove(id){

  console.log("nene",id);

this.setState({todos:this.state.todos.filter(t => t.id !== id)})

 }   

      
    render() {   
      
      const todos = this.state.todos.map(todo =>
         { return <TodoAdd 
        key={todo.id} 
        id={todo.id}
        register= {todo.register} 
         Date={todo.date}
         removetodo={this.remove}
         
         />} )

      return (
        <div>
          <h5>
          <TodoForm AddNew = {this.crear}/>
          Is de list !
          </h5>
         {todos}         
        </div>
      );
    }
}
  export default TodoList;