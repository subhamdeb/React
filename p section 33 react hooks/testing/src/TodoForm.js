import React, {Component} from 'react'
import {Paper,TextField} from "@material-ui/core"
import useInputState from "./Hooks/useInputHooks";
const TodoForm = (props) => {
  const [value,handleChange,reset] = useInputState("")
  return(
    <>
      <Paper>
        <form onSubmit={(e)=> {
          e.preventDefault();
          props.addTodos(value) 
        }}>
          <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth></TextField>
        </form>
        
      </Paper>

    </>
  )
}



export default TodoForm