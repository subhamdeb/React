import React,{component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
const styles ={
  // main : {
  //   backgroundColor : "pink",
  //   border : "3px solid red"
  // },
  // secondary : {
  //   backgroundColor : "gray",
  //   "& h1" : {
  //     color : "red"
  //   },
  //   "& span" : {
  //     backgroundColor : "blue",
  //     color : "white"
  //   }
  // }
root : {
    backgroundColor : "white",
    borderRadius : "5px",
    padding : "0.5rem",
    position : "ralative",
    border : "2px solid black",
    overflow : "hidden",
    "&:hover" : {
      cursor : "pointer"
    }
},
color : {
    backgroundColor : "gray",

},
title : {
  display : "flex",
  justifyContent : "space-between",
  margin : "0px",
  padding : "0.5em"
},
emoji : {

}
}
function MiniPalette(props){//we can use this.props but we input this im function props
  let {classes, paletteName, emoji} = props; // classes from MiniPalette and paletteName and emoji from PaletteList
  console.log(classes);
  return (
    <div className={classes.root}>
      <div className={classes.color} ></div>
      <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5> 
    </div>
  )
}

export default withStyles(styles)(MiniPalette) ;//send MiniPalette with withStyles(styles)