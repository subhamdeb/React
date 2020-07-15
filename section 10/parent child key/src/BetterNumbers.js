import React,{Component} from 'react';

class BetterNumbers extends Component{
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(evt){
    this.props.remove(this.props.value, this.props.key);
    console.log(evt)
  }
  render(){
    return(
      <div>
       <li>
       {this.props.value} <button onClick={this.handleClick}>Click Here</button>
       </li>
      </div>
    )
  }
}

export default BetterNumbers;