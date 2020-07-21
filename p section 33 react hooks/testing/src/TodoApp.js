import React,{Component, useState,useEffect} from "react"
import {Typography,Paper,AppBar,Toolbar,Grid} from "@material-ui/core"
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import uuid from "uuid/dist/v4"



function TodoApp(){
  const initialTodos = [
    {id:1, task:"home cleaning", completed : false},
    {id:2, task:"bed sheet", completed : false},
    {id:3, task:"computer table", completed : false},
    {id:4, task:"showcase", completed : true},
  ]
  const saveTodo = JSON.parse(localStorage.getItem("userTasks"))
  
  console.log(uuid())
  const [todos, setTodos] = useState(saveTodo)
   const addTodos =(todo)=>{
     
     setTodos([...todos, {id:uuid(), task:todo, completed:false}])
   }


   useEffect(()=>{
    localStorage.setItem("userTasks", JSON.stringify(todos))
  })

   function deleteTodo(id){
     let newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
   }
   function editTodo(id,updatedTodo){
     const newTodos = todos.map(todo => todo.id === id ? {...todo, task: updatedTodo} : todo)
     setTodos(newTodos)
   }
   function CheckTodo(id){
     let newTodos = todos.map(todo => {if (id === todo.id){return {...todo,completed : !todo.completed}}else{return todo}})
     setTodos(newTodos)
   }
  return (
    <Paper
     style={{
       padding:0,
       margin:0,
       height : "100vh",
       backgroundColor: "#fafafa"
     }}
     elevation={0}
     >
      
      <AppBar color="primary" position="static" style={{height:"64px"}}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{marginTop:"35px" }}>
        <Grid item xs={12} md={8} lg={4}>
          <TodoForm addTodos= {addTodos}/>
          <TodoList todos={todos} deleteTodo={deleteTodo} CheckTodo={CheckTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}


export default TodoApp
