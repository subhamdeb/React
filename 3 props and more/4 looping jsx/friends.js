class Friend extends React.Component{
  render(){
    
    const {name, hobies} = this.props
    const lis =hobies.map(h => <li>{h}</li>)
    
    return (
      <div>
      <p>Hi I am Subham Deb</p>
      <h1>{name}</h1>
      <ul>
        {lis}
      </ul>
      </div>
      
    )
  }
}