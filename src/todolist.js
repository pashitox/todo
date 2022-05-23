import React, { Component } from "react";
import TodoAdd from "./todoadd";
import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [{id:1,task:"prueva",startDate: "12/12/2002", },{id:2,task:"bendicon",startDate: "12/12/2002"}]
      };  
      
      this.crear = this.crear.bind(this);
      this.remove =this.remove.bind(this);
      this.update = this.update.bind(this)
    }

    crear(rgt){  
      
      console.log("crear",rgt);
      this.setState({        
      todos:[...this.state.todos,rgt]
     });
    }
 
 remove(id){
 // console.log("borrado",id);
this.setState({todos:this.state.todos.filter(t => t.id !== id)})

 }   


 update(id, updatedtodo) {

console.log("recibe",id,updatedtodo)

  const updatedTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
     // alert("act");
      return { ...todo, task: updatedtodo };
  
    }
    return todo;
  });

  console.log("update",updatedTodos);
  this.setState({ todos: updatedTodos });
}
     
    render() {         
      const todos = this.state.todos.map(todo =>
         { return <TodoAdd 
        key={todo.id} 
        id={todo.id}
        task={todo.task}
        Date={todo.startDate}
        ///Date={todo.date}
         removetodo={this.remove}
         edit={this.update}         
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