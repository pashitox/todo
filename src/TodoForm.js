import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {register: "", date:""};
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this)              
    }

    handleChange(evt) {
        
      this.setState({[evt.target.name]: evt.target.value });
      }

      hamdleSubmit(e){
                           
        var date = this.state.date ;
        //const d = new Date(date);  
      
     // const currentDayOfMonth = d.getDate();
     // const currentMonth = d.getMonth(); // Be careful! January is 0, not 1
     // const currentYear = d.getFullYear();
     // const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;


      console.log("juan",date);    
      
      this.setState({register:"", date:""})
      this.props.AddNew(this.state);

      e.preventDefault()


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
         type="date" 
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