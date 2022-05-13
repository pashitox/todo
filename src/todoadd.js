import React, { Component } from "react";


class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {register: ""};
  
   
  }

  
 
 
  render() {
    return (
        <div>
          <button>edit</button>
          <button>delete</button>
      <li>{this.props.register}</li>     
    
      
      </div>
      
    );
  }
}
export default TodoAdd;
