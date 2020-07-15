import React,{Component} from 'react';
import Pokecard from './pokecard';
import './pokedex.css'
class pokedex extends Component{
  // static defaultProps = 
  //     {
  //   pokemon:[
  //     {id:4, name: "Charmender", type: "fire", base_experience : 62},
  //     {id:7, name: "Squirtle", type: "water", base_experience : 63},
  //     {id:11, name: "Metapod", type: "bug", base_experience : 72},
  //     {id:12, name: "Butterfree", type: "flying", base_experience : 178},
  //     {id:25, name: "pikachu", type: "electric", base_experience : 112},
  //     {id:39, name: "Jigglypuff", type: "normal", base_experience : 95},
  //     {id:94, name: "Gengar", type: "poison", base_experience : 225},
  //     {id:133, name: "Eevee", type: "normal", base_experience : 65},
  //     ]
  //   };

  render(){
    // let pokemon = [{id:4, name: "Charmender", type: "fire", base_experience : 62},
    // {id:7, name: "Squirtle", type: "water", base_experience : 63},
    // {id:11, name: "Metapod", type: "bug", base_experience : 72},
    // {id:12, name: "Butterfree", type: "flying", base_experience : 178},
    // {id:25, name: "Pikachu", type: "electric", base_experience : 112},
    // {id:39, name: "Jigglypuff", type: "normal", base_experience : 95},
    // {id:94, name: "Gengar", type: "poison", base_experience : 225},
    // {id:133, name: "Eevee", type: "normal", base_experience : 65},]

  let title;
  if (this.props.isWinner) {
    title = <p className="winner">Winner Hand</p>
  }
  else{
    title = <p className="lose">Losing Hand</p>
  }

    return( 
      <div>
      <h3>hello</h3>
      <h3>total exps:-{this.props.exp}</h3>
      {title}
        {this.props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
      </div>
    );
  }
}

export default pokedex;
