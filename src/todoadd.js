import React, { Component } from "react";
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



class TodoAdd extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      open:false, 
      setOpen:false,       
      task: this.props.task,
      startDate:this.props.startDate };

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
   
  
  HandleRemove(){
        this.props.removetodo(this.props.id);
  }
  HandleEdit(event){
    event.preventDefault();  
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
   
    
     <li>{this.props.task}, {this.props.startDate}</li>
     <Button variant="outlined" onClick={this.handleClickOpen}>
         Editar
       </Button>
       <Button  variant="outlined" onClick={this.HandleRemove}>Delete</Button>    
       <Dialog open={this.state.setOpen} onClose={this.handleClose}>
         <DialogTitle>Updating the information</DialogTitle>
         <DialogContent>
           <DialogContentText>
            typing 
           
           </DialogContentText>
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
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleClose}>Cancel</Button>
           </DialogActions>
         
          

       </Dialog>


    


    </div>         

    
    );
  
  }
}
export default TodoAdd;


