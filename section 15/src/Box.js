import React,{Component} from 'react';

class Box extends Component{

  render(){
    return(
      <div>

<div style={{height:`${this.props.height}px`, width:`${this.props.width}px`, key:`${this.props.id}`, backgroundColor:`${this.props.color}`}} onClick={this.props.removeBox}></div>
      </div>
    )
  }
}

export default Box;