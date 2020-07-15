import React,{Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state ={
      firstName : ""
    }
    this.typeHandeler = this.typeHandeler.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(){
    alert(`you type-- ${this.state.firstName}`);
    this.setState({
      firstName : "",
      email : "",
      password : "" 
    })
  }
  typeHandeler(evt){
      this.setState({
        [evt.target.name] : evt.target.value
      })
      console.log(evt.target.value)
  }
  
  
  render(){
    return(
      <div>
        <form>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.typeHandeler} />
          <h4>new</h4>
          <input type="email" name="email" placeholder="Email" onChange={this.typeHandeler} value={this.state.email}/>
          <input type="password" placeholder="Password" name="password" onChange={this.typeHandeler} value={this.state.password}/>
          <button type="submit" onClick={this.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
