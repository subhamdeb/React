import React,{Component} from 'react';
import './Bgbox.css';
class ColorBox extends Component{
  static defaultProps = {
    color : ["green", "blue", "red", "yellow" , "pink"]
  }

  constructor(props){
    super(props);
    this.state ={ 
      bcolor : "white"
    }
    this.chng = this.chng.bind(this)
  }
  chng(c){
    this.setState({bcolor: c})
  }
  render(){ 
    return(
      
      <div>
        <div className="Bgground" style = {{backgroundColor : this.state.bcolor}}>
        {this.props.color.map(c => {
          let colorchose = {backgroundColor : c}
          return(
            <button className="btnclr" onClick={() =>this.chng(c)} style={colorchose}>click here</button>
          );
        })}
        </div>
      </div>
    );
  }
}
export default ColorBox;