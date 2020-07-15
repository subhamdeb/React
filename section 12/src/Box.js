import React,{Component} from 'react';
import Singlebox from './Singlebox'
import './Box.css';
class Box extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      box : [{number : 0, neighbor: [0,1,2], active:false},
             {number : 1, neighbor: [0,1,3], active:false},
             {number : 2, neighbor: [0,2,3], active:false},
             {number : 3, neighbor: [1,2,3], active:false}
            ]
    }
    this.clickHandeler =this.clickHandeler.bind(this);
  }

clickHandeler(starg){
  let temp = this.state.box.map((items) => {let a = {number : items.number, neighbor: items.neighbor,active: starg.includes(items.number)? (items.active? false : true) : items.active}
return a })

  this.setState({
    box : temp
  })

}

  
  render(){
    let boxes = this.state.box.map(st => (<Singlebox number={st.number} neighbor={st.neighbor} status={st.active} clickH={this.clickHandeler}/>));
    
    return(
      <div>
        <div className="big-box">
          {boxes}
        </div>
      </div>
    )
  }
}
export default Box;