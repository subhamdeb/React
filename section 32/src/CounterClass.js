import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
    this.increments = this.increments.bind(this);
  }
  increments(){
    this.setState({
      count : this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h4>count is : {this.state.count}</h4>
        <button onClick={this.increments}>Add 1</button>
      </div>
    )
  }
}
