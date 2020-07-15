import React,{Component} from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import NavBar from './NavBar';
import "./palette.css"
export default class Palette extends Component{
  constructor(props){
    super(props);
    this.state = {
      level  : 500,
      format : "hex"
    }
    this.handleSlide = this.handleSlide.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  handleSlide(level){
    this.setState({
      level : level,
      
    })
  
  }
  changeFormat(e){
    this.setState({format : e})
  }

  render(){
    const colorBox = this.props.palette.colors[this.state.level].map(color => {
      return(
        <ColorBox background={color[this.state.format]}  name={color.name} key={color.id} />
      )
    })
    return(
      <div className="palette">
      <NavBar level={this.state.level} changeLevel={this.handleSlide} handleChange={this.changeFormat} />
     
        <div className="palette-color">
        {colorBox}
        </div> 
        <footer className="footer-palette">
          {this.props.paletteName}
          <span>{this.props.emoji}</span>
        </footer>
      </div>
    )
  }
}
