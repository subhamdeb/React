import React, { Component } from 'react';

export default class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={
      email : ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      email : e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input onChange={this.handleChange}/>
      </div>
    )
  }
}
