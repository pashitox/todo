import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends Component {
    constructor(props) {
   super(props);
   this.state = {task: "", startDate: new Date(), setStartDate:"" };

   this.handleChanget = this.handleChanget.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.hamdleSubmit = this.hamdleSubmit.bind(this);
  
    

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
      this.props.AddNew({...this.state, id:uuidv4()});

      e.preventDefault()


      }
      
      
         
    render() {  
      
      


      return (
        <div>
        <form 
        onSubmit={this.hamdleSubmit}>
        <label >Enter Register y time</label>
        <div>
        <input
        id="task"
        type="text" 
        name="task"  
         value={this.state.task} 
         onChange={this.handleChange} /> 
        </div>

        <div>     
       
        <DatePicker          
       selected={ this.state.startDate }
       onChange={ this.handleChanget }
       id="task"
       name="startDate"
       dateFormat="dd/MM/yyyy"

    />
       </div>

      
         <button disabled={!this.state.task}>Enviar</button>
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