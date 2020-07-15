import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import "./NavBar.css";


export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      format : "hex",
      open : true
    }
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  closeSnackbar(){
    this.setState({
      open : false
    })
  }
  handleFormatChange(e){
    this.setState({
      format : e.target.value,
      open : true
    });
    this.props.handleChange(e.target.value)
  }
  render() {
    const {level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">RaectColorPicker</Link>
        </div>
        <div className="slider-container">
        <span className="margin-l"> level:{level}</span>
        <div className="slider">
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
        </div>
        </div>
        <div className="select-container">
          <Select value={this.state.format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #254621</MenuItem>
            <MenuItem value="rgb">RGB - rgb(123,185,210)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(125,211,146,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar anchorOrigin={
          {vertical : "bottom", horizontal : "left"}
          } 
          open={this.state.open} 
          autoHideDuration={3000} 
          message={<span id="message-id">{this.state.format} is selected</span>} 
          ContentProps={{'aria-describedby': 'message-id',}} 
          action={[<IconButton onClick={this.closeSnackbar} 
          color="inherit" 
          key="close" 
          aria-lebel="close">
          <CloseIcon/>
        </IconButton>]} onClose={this.closeSnackbar}/>
        
      </header>
    )
  }
}
