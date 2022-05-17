import React, { Component } from "react";


class TodoAdd extends Component {

  constructor(props) {
    super(props);

    this.HandleRemove = this.HandleRemove.bind(this);
    };      
   
  
  HandleRemove(){
    this.props.removetodo(this.props.id);

  }


  
  render() {
    return (
        <div>
          
         <li>
         
         Registro:{this.props.register}, 
         Date:{this.props.Date}     
         <button>edit</button>
          <button onClick={this.HandleRemove}>delete</button>
          </li>
      </div>
      
    );
  }
}
export default TodoAdd;
