import React,{Component} from 'react';
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component{
  static defaultProps ={
    title : "Lotto",
    maxBalls : 6,
    maxNum : 40,
    
  }
  constructor(props){
    super(props);
    this.state ={
      nums : Array.from({length : this.props.maxBalls})
    };
    this.handleClick = this.handleClick.bind(this);

  }
  generate(){
    this.setState(currentState => ({
        nums : currentState.nums.map(nn => Math.floor(Math.random()* this.props.maxNum) + 1)
    }));
     
  }
  handleClick(){
    this.generate();
  }
  render(){
    return(
      <section className="lottery">
        <h1>{this.props.title}</h1>
        <div>{this.state.nums.map(nnn => <Ball num={nnn} />)}</div>
        <button onClick={this.handleClick}>Generate digits</button>
      </section>
    )
  }
}

export default Lottery;