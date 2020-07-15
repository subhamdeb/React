import React, { Component } from 'react'
import './colorBox.css';
import {CopyToClipboard} from "react-copy-to-clipboard";
export default class ColorBox extends Component {
  constructor(props){
    super(props)
    this.state={
      copied : false
    }
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy(){
    this.setState({copied : true}, ()=>{
      setTimeout(()=>this.setState({copied : false}), 2200)
    })
  }
  render() {
    return (
    <CopyToClipboard text={this.props.background} onCopy={this.handleCopy}>
      
      <div style={{backgroundColor : this.props.background}} className="box-color">
      <div className={this.state.copied ? "ani-box ani-box1" : "ani-box" } style={{backgroundColor: this.props.background}}></div>
      <div className={this.state.copied ? "copied-text copied-text-active" : "copied-text"}>
        <h1>COPIED!</h1>
        <p>{this.props.background}</p>
      </div>
        <div className="box-content">{this.props.name}</div>
        <button className="copy-button" >COPY</button>
        <button className="see-more">MORE</button>
      </div>
    </CopyToClipboard>
    )
  }
}
