import React,{Component} from "react";

export default class DogList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container">
       <div className="row">
        {this.props.dogs.map(st => (<div className="col-md-4 col-12">{st.name}
          <div><img className="img-radi " src={st.src} /></div>
        </div>))}
      </div>{/* end the row*/}
      </div>
    )
  }
}