import React,{Component} from 'react';

class ShopingListForm extends Component{
  constructor(props){
    super(props);
    this.state= {
      name:"",
      qty: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(evt){
  this.setState({
    [evt.target.name] : evt.target.value
  })
}
handleSubmit(evt){
  evt.preventDefault(); // its help to prevent refresh automatic
  this.props.addItem(this.state)
  this.setState({
    name : "",
    qty:""
  })
}

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor= "name">Name: </label>
        <input
        onChange={this.handleChange}
        id="name"
        value={this.state.name}
        name="name"
        placeholder="name of the item"
         />
        <label htmlFor="qty">qty: </label>
        <input
        onChange={this.handleChange}
        id="qty"
        value={this.state.qty}
        name="qty"
        placeholder="Quantitty"
         />
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default ShopingListForm;
