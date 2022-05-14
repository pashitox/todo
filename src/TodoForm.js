import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {register: '', Date:''};
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this)              
    }

    handleChange(event) {
        console.log(event)
        this.setState({register:event.target.value, Date:event.target.value});
      }

      hamdleSubmit(e){
      console.log(e);
      e.preventDefault()
      
      this.setState({register:"", Date:""})
      this.props.AddNew(this.state);
      }
   

      
    render() {        
      return (
        <div>
        <form 
        onSubmit={this.hamdleSubmit}>
        <label >Enter Register</label>
        <input
         type="text" 
         value={this.state.value} 
         onChange={this.handleChange} /> 
        
        <input
         type="Date" 
         value={this.state.Date} 
         onChange={this.handleChange} /> 

         <button>Enviar</button>
        </form>
        </div>
      );
    }
}
  export default TodoForm;