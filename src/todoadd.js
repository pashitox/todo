import React, { Component } from "react";


class TodoAdd extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      isEditing: false,    
      task: this.props.task };
    this.HandleRemove = this.HandleRemove.bind(this);
    this.HandleEdit = this.HandleEdit.bind(this);
    };      

    handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
   
  
  HandleRemove(){
    this.props.removetodo(this.props.id);

  }
  HandleEdit(event){

    event.preventDefault();
    //take new task data and pass up to parent
      
       console.log("task",this.state.task)
    this.props.edit(this.props.id,this.state.task);
    this.setState({ isEditing: false });


    

  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }


  
  render() {
    return (
        <div>          
         <li>         
         Registro:{this.props.register}, 
         Date:{this.props.Date} 
         update:{this.props.task}    
         <button onClick={this.HandleEdit}>edit</button>
          <button onClick={this.HandleRemove}>delete</button>
          </li>      

      </div>
      
    );
  }
}
export default TodoAdd;
