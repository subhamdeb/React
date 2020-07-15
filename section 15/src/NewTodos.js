import React,{Component} from 'react';
import uuid from 'uuid/v4'
class NewTodo extends Component{
  constructor(props){
    super(props);

    this.state={
      taskname : ""
    }
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit= this.handelSubmit.bind(this)

  }

  handelChange(evt){
      this.setState({
        taskname : evt.target.value
      })
  }

  handelSubmit(evt){
    evt.preventDefault()
    let withID = {...this.state , id: uuid()}
    this.props.addItem(withID);
    console.log(withID);
    this.setState({
      taskname: ""
    })
  }

  
  render(){
    return(
      <div>
      <form onSubmit={this.handelSubmit}>
      <input name="taskname" value={this.state.taskname} placeholder="Add New Todo" onChange={this.handelChange}></input>
      <button type="submit">!Add Todo</button>
      </form>
      </div>
    )
  }
}

export default NewTodo;