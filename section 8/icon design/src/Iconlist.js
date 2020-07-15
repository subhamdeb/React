import React,{Component} from 'react';

class iconList extends Component{
  static defaultProps ={
    options : [
      "angry",
      "anchor",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };// end defaultProps

  constructor(props){
    super(props);
    this.state = {
      icons : ["bell", "boat"]
    };

    this.addIcon = this.addIcon.bind(this);
  }
  
  addIcon(){
      let idx = Math.floor(Math.random() * this.props.options.length);
      let newIcon = this.props.options[idx];
      this.setState({icons : [...this.state.icons , newIcon]});
  }
  render(){
    const icon = this.state.icons.map((ii) => <i className={`fas fa-${ii}`} />);
    return(
        <div>
          <h1>Icons: {icon}</h1>
          <button onClick={this.addIcon}>Add Icon</button>
        </div>
    );
  }
}

export default iconList;