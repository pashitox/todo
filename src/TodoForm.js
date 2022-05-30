import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {task: "", startDate: new Date(), setStartDate:"", active: false};

   this.handleChanget = this.handleChanget.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this);
    this.button = this.button.bind(this);
    } 
    handleChanget(date) {        
     // this.setState({[evt.target.name]: evt.target.value });
     this.setState({ startDate: date })    
      }
   
      handleChange(evt) {        
       this.setState({[evt.target.name]: evt.target.value });
       // this.setState({ startDate: date })       
         }


      hamdleSubmit(e){                          
     // var dm = this.state.date ;
     // const mod = new Date(dm);    // 
     //const currentDayOfMonth = mod.getDate();
     //const currentMonth = mod.getMonth(); // Be careful! January is 0, not 1
     //const currentYear = mod.getFullYear();
     //const date1 = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
     //let text = date1.toString();
     console.log(this.state.startDate)
     console.log("juan",e); 
     var date = new Date();      
      this.setState({task:"",startDate:date})
      this.props.AddNew({...this.state, id:uuidv4()})
      e.preventDefault()
      }

     button(){this.setState({ active: !this.state.active })
           setTimeout(()=>{
            this.setState({ active: !this.state.active })
           },400)
          } 
      
      
         
    render() {  
      return (
        <div>
          <div >
        <form className="form-input" 
        onSubmit={this.hamdleSubmit}>
        <h2 className="container_bit title1">Enter your Register and Time</h2>
        <div>
        <input 
        placeholder="write a register"
        className="input"      
        id="task"
        type="text" 
        name="task"  
         value={this.state.task} 
         onChange={this.handleChange} /> 
        </div>
        <div>            
        <DatePicker
        className="input"                  
       selected={ this.state.startDate }
       onChange={ this.handleChanget }
       id="task"
       name="startDate"
       dateFormat="dd/MM/yyyy" />
       </div> 
       <div className="container_b">
       <button disabled={!this.state.task}
        className={`${this.state.active?"button_active":"rest_button"}`}
        onClick={this.button}>
        Enviar
      </button>
      </div>
        </form>
        </div>
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