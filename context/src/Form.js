import React,{Component} from 'react';

import {Avatar,CssBaseline,FormControl,FormControlLabel,Checkbox,Input,InputLabel,Paper,Typography,Button ,MenuItem,Select} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined"
import withStyles from "@material-ui/core/styles/withStyles"
import styles from "./styles/FormStyles"

class Form extends Component { 
  render(){
    const {classes} = this.props
    return (
      <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Sign In</Typography>
            <Select value="English">
              <MenuItem>English</MenuItem>
              <MenuItem>french</MenuItem>
              <MenuItem>Spanish</MenuItem>
            </Select>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" name="password" type="password" autoFocus/>
              </FormControl>
              <FormControlLabel control={<Checkbox color="primary"/>} label="Remember Me"/>
              <Button 
              variant="contained"
              type="sumbit"
              fullWidth
              color="primary"
              className={classes.submit}
              >
                  Sign In
              </Button> 
            </form>
          </Paper>
      </main>
    )
  }
}


export default withStyles(styles)(Form);