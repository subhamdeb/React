import React,{Component} from 'react';


class BrokenClick2 extends Component{
  state = { click : false};

  myfun2= ()=>{
    this.setState({click : true});
  }

render() {
  return(
    <div>
      <h1>from BrokenClick2</h1>
    <h4>{this.state.click ? "click": "not click"}</h4>
    <button onClick={this.myfun2}>click here</button>
    </div>
  )
}
}
export default BrokenClick2;