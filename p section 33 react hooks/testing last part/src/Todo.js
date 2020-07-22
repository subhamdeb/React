import React,{useState} from 'react'
import {Checkbox,ListItem, ListItemText,IconButton,ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from "@material-ui/icons/Edit"
import toggleEdit from "./Hooks/toggleEdit"
export default ({id,task,completed,deleteTodo,CheckTodo,editTodo}) => {
  const [updating, setUpdating] = useState(false)
  const [text, handleChange,reset] = toggleEdit(task)


  return (
  <>
  <ListItem>
  {!updating ? 
    <>
    <Checkbox checked={completed} onClick={(e) => {
      e.preventDefault()
      CheckTodo(id)}}/>
    <ListItemText style={{textDecoration : completed? "line-through":"none"}}>{task}</ListItemText>
    <ListItemSecondaryAction>
      <IconButton>
        <DeleteIcon onClick={(e) => {
          e.preventDefault()
          deleteTodo(id)
        }}/>
      </IconButton>
      <IconButton>
        <EditIcon onClick={(e) => {
      e.preventDefault()
      setUpdating(!updating)
      }}/>
      </IconButton>
    </ListItemSecondaryAction>
    </>: <form onSubmit={(e)=>{
      
      editTodo(id,text)
       
      setUpdating()   
       e.preventDefault()
    }}>
        <input value={text} onChange={(e) => handleChange(e)}/>
    </form> }
  </ListItem>
  </>
  )
}