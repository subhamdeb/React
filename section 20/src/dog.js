import React,{Component} from 'react';
import imgDog from './img/emoji.png'
class Dog extends Component{
  render(){
    return(
      <div>
        <h1>DOG!</h1>
        <div>
        <p>the dog name is {this.props.name}</p>
        <img src={imgDog} style={{width : 100}} alt="Dog"/>
        </div>
      </div>
    )
  }
}

export default Dog;