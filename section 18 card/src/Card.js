import React,{Component} from 'react';
import "./Card.css"
class Card extends Component{
  constructor(props){
    super(props);
    let posiX = Math.random() * 40 - 30
    let posiY = Math.random() * 40 - 30
    let rotation = Math.random() * 90 - 60
    this._transform = `translate(${posiX}px,${posiY}px) rotate(${rotation}deg) `
  }
  render(){
    return(
     <img className="card" style={{ transform: this._transform}} src={this.props.imgSrc} alt={this.props.name} />
    )
  }
}

export default Card;