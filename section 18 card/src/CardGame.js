import React,{Component} from "react";
import axios from 'axios';
import Card from './Card';
const BASE_API_URL = "https://deckofcardsapi.com/api/deck/";
          
class CardGame extends Component{
  
  constructor(props){
    super(props);
    this.state={
      deck : null,
      allimg : [
        { imgSrc : "",code:"4524545"}
      ] 
    }

    this.cardShuffle = this.cardShuffle.bind(this)
  }

  async componentDidMount(){
     let deck = await axios.get(`${BASE_API_URL}new/shuffle/`);

     this.setState({deck : deck.data})
  }
  
  async cardShuffle(){
    let card_api = `${BASE_API_URL}${this.state.deck.deck_id}/draw/`;

    try{
      let img_link =await axios.get(card_api);
    let dataimage = img_link.data.cards[0]
    if(img_link.data.success === false){
      throw new Error("out of reamining cards");
    }
    this.setState(st => ({
      allimg : [...st.allimg , {cardname : dataimage.suit, code : dataimage.code, imgSrc : dataimage.image}]
    }));
    console.log(img_link);
    }catch(err){
        alert(err)
    }

  }
  
  render(){
    return(
      <div>
      <h1>Hi from Card Game</h1>
      <button onClick={this.cardShuffle} className="mrgn">Shuffle Here</button>
      
      
      {this.state.allimg.map(card => (<Card key={card.code} imgSrc={card.imgSrc} name={card.cardname} />))}
      
      
      </div>
    )
  }
}

export default CardGame;