import React, { Component } from "react";


class TodoAdd extends Component {
  
  render() {
    return (
        <div>
          
         <li>
        Registro:{this.props.register},  Date:{this.props.Date}     
         <button>edit</button>
          <button>delete</button>
          </li>
      </div>
      
    );
  }
}
export default TodoAdd;
