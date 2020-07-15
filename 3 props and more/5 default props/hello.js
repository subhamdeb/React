class Hello extends React.Component{
  static defaultProps = {
    from : "Anonymous"
  }
  render(){
    return (
      <div><p>Hello from Hello</p>
      <p>{this.props.to.repeat(this.props.times)} and from {this.props.from}</p></div>
    )
  }
}