import React,{Component} from 'react';
import './Todo.css';
class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing : false,
      taskname: this.props.taskname,
      id: this.props.id


    }
    this.deleteHandeler = this.deleteHandeler.bind(this);
    this.editing = this.editing.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.ischecked = this.ischecked.bind(this);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.update(this.state)
    this.editing()
  }

  ischecked(){
    this.props.checked(this.state)
  }

  editing(evt){
    this.setState({
      isEditing : !this.state.isEditing
    })

  }
  
  deleteHandeler(){
    this.props.deleteTask()
  }
  render(){
    let result;
    console.log(this.props.id)
    if(this.state.isEditing){
      result = (<form onSubmit={this.handleSubmit}>
        <input type="text" name="taskname" onChange={this.handleChange} value={this.state.taskname}></input>
        <button type="submit">Ok</button>
      </form>)
    }
    else{
      result = (
        <div>
      <div className="Todo">
       <div className={!this.props.complete? "nametask":"nametask comed"} onClick={this.ischecked}>{this.props.taskname}</div>
       <button className="taskbutton" onClick={this.props.remove}>X</button>
       <button className="taskbutton" onClick={this.editing}>ED</button>
      </div>
      </div>
      )
    }

    return(
      <div>{result}</div>
    )
  }
}

export default Todo;