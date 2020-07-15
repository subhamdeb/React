import React,{Component} from 'react';
import ColorBox from './colorBox';
class BoxContainer extends Component{
  static defaultProps ={
    numBoxes :18
  } 
  render(){
    const boxes = Array.from({length : this.props.numBoxes}).map(() => (
      <ColorBox />
    ));
    return(
      <div>
        {boxes}
      </div>
    )
  }
}

export default BoxContainer;