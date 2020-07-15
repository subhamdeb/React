import React,{Component} from 'react';
import ShopingListForm from './ShopingListForm';
import UUID from 'uuid/v4';
class Shoping extends Component{
  constructor(props){
    super(props);
    this.state = {
      items : [{name : "milk", qty : "2 gallon", id : UUID()},
               {name : "Bread", qty : "2 loaves", id : UUID()}]
    }
    this.renderitems = this.renderitems.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(item){
    let newItem = {...item, id: UUID()}
    this.setState(st => ({
      items : [...st.items, newItem]
    }))
  }
  renderitems(){
    return(
      <ul>
      {this.state.items.map(st => <li key={st.id}>{st.name} : {st.qty}</li>)}
      </ul>
    )
  }
  
  
  render(){
    return(
      <div>
      {this.renderitems()}
      <ShopingListForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default Shoping;