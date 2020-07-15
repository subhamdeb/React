import React,{Component} from 'react';
import axios from "axios";
import "./JokesBank.css"
import emoji from './img/emoji.png'
import Joke from "./Joke";
import uuid from 'uuid/v4'
class JokesBank extends Component{
  static defaultProps ={
    numJokesToGet : 10
  }
    constructor(props){
      super(props);
      this.state ={
        jokesArr : (JSON.parse(window.localStorage.getItem("jokes")) || [])
      }

      this.jokevote = this.jokevote.bind(this)
      this.getJokes = this.getJokes.bind(this)
      // this.jokes = this.jokes.bind(this)
    }
    jokevote(x,y){
      let a = []
      a = this.state.jokesArr.map(joke => joke.id === y ? {joke: joke.joke, vote: joke.vote + x, id: joke.id} : joke )

      this.setState({
        jokesArr : a
      })
      window.localStorage.setItem("jokes" ,JSON.stringify(a))
    }
    // jokes(){
    //   let jokes = axios.get("https://icanhazdadjoke.com/")
    //   console.log(jokes)
    // }
componentDidMount(){
  if(this.state.jokesArr.length === 0 ) this.getJokes();
}
    async getJokes(){
      let jokes = [];
    // for(let i=0; i<this.props.numJokesToGet;i++){
    //   jokes =await axios.get("https://icanhazdadjoke.com/", {headers: {accept: "application/json"}})
    //   this.setState(st => ({
    //     jokesArr : [...st.jokesArr , jokes.data.joke]
    //   }))
    // }
  while(jokes.length < this.props.numJokesToGet){
      let joke =await axios.get("https://icanhazdadjoke.com/", {headers: {accept: "application/json"}});
      console.log(joke.data.joke);
      jokes.push({joke : joke.data.joke, vote:0, id : uuid()});
      
    }
    this.setState({
      jokesArr: jokes
    })

    window.localStorage.setItem("jokes", JSON.stringify(jokes))
    
    }//end componentDidMonunt
  

  render(){
    return(
        <div className="jokesBackground">
        <div className="sideBar">
        <div><p className="dfont">DAD<span className="jfont">Jokes</span></p></div>
        <img className="emoji" alt="emoji" src={emoji} />
        <button onClick={this.getJokes}>Click Me</button>
        </div>
        <div className="jokesList-joke">
          <div className="jokes">
            {this.state.jokesArr.map(joke => (<Joke joke={joke.joke} vote={joke.vote} ids={joke.id} jokevote={this.jokevote}/>))}
          </div>
        </div>
        </div>
    )
  }
}

export default JokesBank;