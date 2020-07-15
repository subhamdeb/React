import React,{Component} from 'react';
import AddBox from './AddBox';
import Box from './Box';
import UUID from "uuid/v4";
import "./Allbox.css";

class Allbox extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: [
     
      ]
    }
        this.Addingbox = this.Addingbox.bind(this);
        this.removeBox = this.removeBox.bind(this)
}
  
Addingbox(evt){
  let item = {...evt, id:UUID()}
  this.setState(st => ({
    items : [...st.items,item]
  }))
}
removeBox(key){
  this.setState(stt => ({
    items : stt.items.filter(item => item.id !== key)
  }))
}

  render(){
    return(
      <div>
      <AddBox addbox={this.Addingbox}/>
      {this.state.items.map(item => (<Box width={item.width} height={item.width} key={item.id} color={item.color} removeBox={() => {this.removeBox(item.id)}}/>))}
      </div>
    )
  }
}

export default Allbox;