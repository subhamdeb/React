import React,{Component} from 'react';
import './Joke.css'
class Joke extends Component{
  constructor(props){
    super(props);
    this.downvote = this.downvote.bind(this);
    this.upvote = this.upvote.bind(this);
  
  }
  
downvote(){
  this.props.jokevote(-1,this.props.ids)
}

upvote(){
  this.props.jokevote(+1,this.props.ids)
}
  render(){
    return(
      <div className="maindiv">
      <div><span onClick={this.upvote}>⬆️</span>{this.props.vote}<span onClick={this.downvote}>⬇️</span></div>
      <div>{this.props.joke}</div>
      </div>
    )
  }
}

export default Joke; 