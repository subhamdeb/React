import React, { Component } from 'react'
import TodoApp from './TodoApp'
import {Paper,List,Divider,ListItem,ListItemText} from "@material-ui/core"
import Todo from './Todo'


const TodoList= (props)=> {
    return (
      <Paper>
        <List>
          {props.todos.map(aa => 
            <>
            <ListItem>
              <ListItemText>
                <Todo id={aa.id} task={aa.task} completed={aa.completed} deleteTodo={props.deleteTodo} CheckTodo = {props.CheckTodo} editTodo={props.editTodo}/>
              </ListItemText>
            </ListItem>
            <Divider/>
            </>
          )}
        </List>
      </Paper>
    )
}


export default TodoList