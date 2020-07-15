import React,{Component} from 'react';
import Todo from './Todo';
import NewTodo from './NewTodos';
class TodoList extends Component{

  constructor(props){
    super(props);
    this.state = {
      todos : [
        
      ]//todo name, completed?, Unique ID 
    }

    this.handelRemove = this.handelRemove.bind(this);
    this.addItem = this.addItem.bind(this);
    this.update = this.update.bind(this);
    this.checked = this.checked.bind(this);
  }

  checked(evt){
    let updated = this.state.todos.filter(fltr => {if(fltr.id === evt.id){ fltr.completed = !fltr.completed; return fltr} else { return fltr}});

    this.setState({
      todos : updated
    })

  }
  addItem(addingitem){
    let temp = {completed : false}
      addingitem = Object.assign(addingitem , temp)
    this.setState(st => ({
      todos : [...st.todos,addingitem]
    }));
  }

  update(evt){
    let updated = this.state.todos.filter(fltr => {if(fltr.id === evt.id){ fltr.taskname = evt.taskname; return fltr} else { return fltr}});

    this.setState({
      todos : updated
    })
    console.log(updated)
  }

  handelRemove(evt){
    let newtodos = this.state.todos.filter(sts => evt !== sts.id)
      this.setState({
        todos : newtodos
      })
  }


  render(){
    return(
      <div>
        {this.state.todos.map(item => (<Todo taskname={item.taskname} remove={() => this.handelRemove(item.id)} complete={item.completed} checked={this.checked} update={this.update} id={item.id} key={item.id}/>))}
      <NewTodo addItem={this.addItem} />
      </div>

    )
  }
}

export default TodoList;