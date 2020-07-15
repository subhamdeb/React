class Hello extends React.Component{
  render() {
    return(
        <h1>{this.props.to} Loves {this.props.from} {"<3".repeat(this.props.times)} times</h1>
    )
  }
}