import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor : "blue",
    height : "100vh",
    display : "flex",
    alignitems : "flex-start",
    justifyContent : "center"
  },
  container : {
    width : "50%",
    display : "flex",
    alignitems : "flex-start",
    flexDirection : "column",
    flexWrap : "wrap"
  },
  nav: {
    display: "flex",
    width : "100%",
    justifyContent : "space-between",
    color : "white"
  },
  allPalette : {
    boxSizing : "border-box",
    width: "100%",
    display : "grid",
    gridTemplateColumns : "repeat(3 , 30%)",
    gridGap : "5%"
  }
}
class PaletteList extends Component {
  goToPalette(id){
    console.log("HI")
    this.props.history.push(`/palette/${id}`)
  }
  render(){
      let { classes } =this.props;
      console.log(classes)
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Raect Colors</h1>
          </nav>
          <div className={classes.allPalette}>
            {this.props.allPalette.map(st => (
              <MiniPalette {...st} handleClick={()=>this.goToPalette(st.id)}/>
              ) )}
          </div>
        </div> 
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);