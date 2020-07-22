import {useState} from "react"
import uuid from 'uuid/dist/v4'

function TodosFunc(initialValue){
  const [todos,setTodos] = useState(initialValue);
  return{
    todos,
  addTodos:todo=>{
     
    setTodos([...todos, {id:uuid(), task:todo, completed:false}])
  },

  deleteTodo:id=>{
    let newTodos = todos.filter(todo => todo.id !== id)
     setTodos(newTodos)
  },
  editTodo:(id,updatedTodo)=>{
    const newTodos = todos.map(todo => todo.id === id ? {...todo, task: updatedTodo} : todo)
    setTodos(newTodos)
  },
  CheckTodo:id=>{
    let newTodos = todos.map(todo => {if (id === todo.id){return {...todo,completed : !todo.completed}}else{return todo}})
    setTodos(newTodos)
  }
}
}

export default TodosFunc