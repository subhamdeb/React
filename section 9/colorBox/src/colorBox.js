import React,{Component} from 'react';
import './Color.css';
import {choice} from './Helper';
class ColorBox extends Component{
  static defaultProps ={
    colors : ["green","blue","yellow","red","purple","black","magenta","cyan","orange","brown","pink"],
    box_nums :10,
  }
  constructor(props){
    super(props);
    this.state={
      colors: choice(this.props.colors),
    }
  this.clickHandeler = this.clickHandeler.bind(this)
  }
randomColor(){
  let newColor; 
      do{
          newColor = choice(this.props.colors)
      }
      while(this.state.colors === newColor)
      this.setState({colors : newColor});
}
clickHandeler(){
  this.randomColor();
}

  render(){
    return(
      <div className="posi">
      <div className="color-box" style={{backgroundColor : this.state.colors}} 
      onClick={this.clickHandeler}></div>
      </div>
    )
  }
}
export default ColorBox ;