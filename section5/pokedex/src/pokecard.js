import React,{Component} from 'react';
import './pokecard.css';
// const poke_API1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let poke_API= "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padTwoThree =(number) => (number <= 999 ? `00${number}`.slice(-3) : number )
class pokecard extends Component{
  render(){
    // let img_SRC1 = `${poke_API}${this.props.id}.png`;
    let img_SRC = `${poke_API}${padTwoThree(this.props.id)}.png`
    return(
          <div className="pokecard">
            <h2 >{this.props.name}</h2>
            <div className = "szz">
              <img alt="123" src={img_SRC} />
            </div>
            
            <p>type- {this.props.type}</p>
            <p>Exp- {this.props.exp}</p>
          </div>
    );
  }
}

export default pokecard;