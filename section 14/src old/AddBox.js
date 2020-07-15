import React,{Component} from 'react';
import uuid from 'uuid/v4';

class AddBox extends Component{
  constructor(props){
    super(props);
    this.state={
      height:0 ,
      width: 0,
      color:""
    }
    this.handelChange = this.handelChange.bind(this);
    this.submitHandeler = this.submitHandeler.bind(this);
    this.handelChangecolor = this.handelChangecolor.bind(this);
  }

handelChange(evt){
  this.setState({
    [evt.target.name] : Number(evt.target.value)
  })
}
handelChangecolor(evt){
  this.setState({
    color : evt.target.value
  })
}
submitHandeler(evt){
  evt.preventDefault()
  let argu = {...this.state, id: uuid()}
  this.props.addbox(argu)
  this.setState({
    height:0,
    width:0,
    color:""
  })
}

  render(){
    return(
      <form onSubmit={this.submitHandeler}>
        <input name="height" type="number" value={this.state.height} placeholder="Height" onChange={this.handelChange}/>
        <input name="width" value={this.state.width} placeholder="width"  type="number" onChange={this.handelChange}/>
        <input name="color" value={this.state.color} placeholder="color" onChange={this.handelChangecolor}/>
        <button type="submit">!Additem</button>
      </form>
    )
  }
}


export default AddBox;