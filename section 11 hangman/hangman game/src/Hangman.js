import React,{Component} from 'react';
import './Hangman.css';
import { choseword } from './Word';
import img0 from './img/img0.jpg';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';

class Hangman extends Component{
  static defaultProps ={
    img : ["img0","img1","img2","img3","img4","img5","img6"],
    maxWrong : 6,
    charecter : "abcdefghijklmnopqrstuvwxyz",
    srcs : [img0, img1, img2, img3, img4, img5, img6]
  };
  
  constructor(props){
    super(props);
    this.state ={
      guessedword : new Set(),
      nWrong : 0,
      accutualWord : choseword()
     
    } // state end
    this.genarateButton = this.genarateButton.bind(this)
    this.answer = this.answer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
  };
reset(){
  this.setState({
    nWrong : 0,
    guessedword : new Set(),
    accutualWord : choseword()

  });
}
answer(evt){
  let warry = this.state.accutualWord.split('');
  let rvalue= warry.map(nn => this.state.guessedword.has(nn) ? nn : "  _  ");

  return rvalue;
}


handleInput(evt){
  let ltr = evt.target.value;
  this.setState(st => ({
    guessedword : st.guessedword.add(ltr),
    nWrong : st.nWrong + (st.accutualWord.includes(ltr) ? 0 : 1)
  }))
}
genarateButton(){
  let rtstm = this.props.charecter.split("").map((ltr,idx) => 
      <button
      key = {idx}
      value={ltr}
      onClick={this.handleInput}
      disabled = {this.state.guessedword.has(ltr)}
      className={this.state.guessedword.has(ltr) ? "btn-dsbl" : "btn-style"}
      >{ltr}</button>
  );
  return rtstm;

}

  render(){
    return(
      <div >
    <div className="">
      <h4>Hello From Hangman Game</h4>
      <div className="picture"><img alt="IMG" src={this.props.srcs[this.state.nWrong]} /></div>

      {(this.props.maxWrong > this.state.nWrong) ? (<div className="ans-font">{this.answer()}</div>) : (<div className="ans-font">{this.state.accutualWord}</div> )}

      <div className="">Wrong Guesses: {this.state.nWrong}</div>
      <div className="btn-upper">{(this.props.maxWrong > this.state.nWrong) ? this.genarateButton() : `You Lose! Answer is ${this.state.accutualWord}`}</div>
      <button onClick={this.reset}>Reset?</button>
    </div>

    {/* for keyboard */}
      </div>
    );
  }
}
export default Hangman;