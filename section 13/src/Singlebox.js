import React,{Component} from 'react';

class Singlebox extends Component{

  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt){

    this.props.clickH(this.props.neighbor);
  }

  render(){
    return(
      <div className={this.props.status ? "color-box-ac" : "color-box-de"} onClick={this.handleClick}>{console.log(this.props.neighbor)}</div>
    )
  }
}

export default Singlebox;