import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {register: "", date:""};
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this)              
    }

    handleChange(event) {
        
      console.log("new value", event.target.name);

        this.setState({ register: event.target.value });
      }

      hamdleSubmit(e){
      console.log(e);
      e.preventDefault()
      
      this.setState({register:"", date:""})
      this.props.AddNew(this.state);
      }
   

      
    render() {        
      return (
        <div>
        <form 
        onSubmit={this.hamdleSubmit}>
        <label >Enter Register</label>
        <div>
        <input
        id="register"
        type="text" 
        name="register"  
         value={this.state.register} 
         onChange={this.handleChange} /> 
        </div>
        <div>
        <input
         id="date"
         type="text" 
         name="date"
          value={this.state.date} 
         onChange={this.handleChange} /> 
         </div>
         <button>Enviar</button>
        </form>
        </div>
      );
    }
}
  export default TodoForm;