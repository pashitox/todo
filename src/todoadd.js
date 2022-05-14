import React, { Component } from "react";


class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  } 
  render() {
    return (
        <div>
          <button>edit</button>
          <button>delete</button>
      <li>{this.props.register},{this.props.Date}</li>     
    
      
      </div>
      
    );
  }
}
export default TodoAdd;
