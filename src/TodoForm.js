import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this)              
    }

    handleChange(evt) {
        
      this.setState({[evt.target.name]: evt.target.value });
      }

      hamdleSubmit(e){
                           
     // var dm = this.state.date ;
     // const mod = new Date(dm);    // 
     //const currentDayOfMonth = mod.getDate();
     //const currentMonth = mod.getMonth(); // Be careful! January is 0, not 1
     //const currentYear = mod.getFullYear();
     //const date1 = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
     //let text = date1.toString();
     //console.log("juan",e);    
      
      this.setState({task:""})
      this.props.AddNew({...this.state, id:uuidv4()});

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
        id="task"
        type="text" 
        name="task"  
         value={this.state.task} 
         onChange={this.handleChange} /> 
        </div>
      
         <button>Enviar</button>
        </form>
        </div>
      );
    }
}
  export default TodoForm;

 // <div>
 // <input
 //  id="date"
 //  type="date" 
 //  name="date"
 //   value={this.state.date} 
 //  onChange={this.handleChange} /> 
 //  </div>