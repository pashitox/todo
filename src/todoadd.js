import React, { Component } from "react";
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './TodoForm.css';



class TodoAdd extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      open:false, 
      setOpen:false,       
      task: this.props.task,
      startDate:this.props.startDate };



    this.handleChanget = this.handleChanget.bind(this);
    this.handleChange = this.handleChange.bind(this);  
    this.HandleRemove = this.HandleRemove.bind(this);
    this.HandleEdit = this.HandleEdit.bind(this); 
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);

    
  
    };      

    handleChange(evt) {
      console.log({[evt.target.name]: evt.target.value})
      this.setState({[evt.target.name]: evt.target.value
      });
    }

    handleChanget(date) {        
      // this.setState({[evt.target.name]: evt.target.value });
      console.log("editchange",date)
      this.setState({ startDate:date }) 
     
       }  
   
  
  HandleRemove(){
        this.props.removetodo(this.props.id);
  }
  HandleEdit(event){
    event.preventDefault();  
    console.log("edit1",this.props.id,this.state.task,this.state.startDate);
     this.props.edit(this.props.id,this.state.task,this.state.startDate);     
     this.setState({setOpen:false});   
     
  } 
  handleClickOpen(){    
    this.setState({setOpen:true});    
  };

handleClose () {
  this.setState({setOpen:false});
  };







  render() {
       return (    
    <div>     
   <div class="container_todo">
	<div class="todo_list">
		<ul>
			<li>
				<label>
					<input type="checkbox" class="hidden_real_check"/>
					<div class="todo_element">
						
						<span class="customized_ckeck">
							<span class="checkbox">
								<span class='internal_one'></span>
								<span class='internal_two'></span>
							</span>
						</span>
						<span class="element_title">{this.props.task}</span>
            <DatePicker
        className="input" 
        selected={this.props.startDate}
         dateFormat="dd/MM/yyyy" />
         <Button variant="text"  onClick={this.handleClickOpen}>Editar  </Button>
        <Button  variant="text" color="error" onClick={this.HandleRemove}>Delete</Button> 
             
				   	</div>
				  </label>
			  </li>
         </ul>
         </div>
         </div>
        
     <div>
     
       <Dialog open={this.state.setOpen} onClose={this.handleClose}>
         <DialogTitle>Updating the information</DialogTitle>
         <DialogContent>
           <DialogContentText>
           
           </DialogContentText>
           <form className="form-input" onSubmit={this.HandleEdit}>
           <input
            className="input" 
            id="task"
            type='text'
            value={this.state.task}
            name='task'
            onChange={this.handleChange}
           />  
            <DatePicker 
             className="input"          
             selected={ this.state.startDate }
            onChange={ this.handleChanget }
            id="startDate"
            name="startDate"
             dateFormat="dd/MM/yyyy"/>
          <div className="container_b">   
         <button className={`${this.state.active?"button_active":"rest_button"}`}>Update</button>
         </div>
         </form>      
         </DialogContent>
         <DialogActions>
         <Button onClick={this.handleClose}>Cancel</Button>
         </DialogActions>
        </Dialog>

        </div>
    </div>         

    
    );
  
  }
}
export default TodoAdd;




//<div>
//<li>
//  <span>Register:
//  {this.props.task}</span> 
//  <DatePicker
//   className="input" 
// selected={this.props.startDate}
//   dateFormat="dd/MM/yyyy" /></li>
//    <Button variant="text"  onClick={this.handleClickOpen}>
//    Editar
//  </Button>
//  <Button  variant="text" color="error" onClick={this.HandleRemove}>Delete</Button>   
//</div>  