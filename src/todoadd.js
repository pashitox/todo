import React, { Component } from "react";


class TodoAdd extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      isEditing: false,    
      task: this.props.task};

    this.handleChange = this.handleChange.bind(this);  
    this.HandleRemove = this.HandleRemove.bind(this);
    this.HandleEdit = this.HandleEdit.bind(this);
    this.toggleForm = this.toggleForm.bind(this)
    };      

    handleChange(evt) {

      console.log({[evt.target.name]: evt.target.value})
      this.setState({[evt.target.name]: evt.target.value
      });
    }
   
  
  HandleRemove(){
    this.props.removetodo(this.props.id);

  }
  HandleEdit(event){
    event.preventDefault();    
    //take new task data and pass up to parent      
     this.props.edit(this.props.id,this.state.task);
     //console.log("edit", this.state.task)     
     this.setState({ isEditing: false});   
     
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (       
          <form  onSubmit={this.HandleEdit}>
            <input
              id="task"
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />        
            <button>Save</button>
          </form>      
      );
    } else {
      result = (     
        <div>  
         <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.HandleRemove}>X</button>        
          <li onClick={this.handleToggle}>
          {this.props.task}
          </li>
       </div>         
      );
    }
   return result
 
  }
}
export default TodoAdd;


///
///<div>          
///<li>         
///Registro:{this.props.register}, 
///Date:{this.props.Date} 
///update:{this.props.task}    
///<button onClick={this.HandleEdit}>edit</button>
/// <button onClick={this.HandleRemove}>delete</button>
/// </li>      
///
///</div>