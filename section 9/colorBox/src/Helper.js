let newcolors
function choice(ary){
  newcolors = ary[Math.floor(Math.random()*ary.length)];
  return(newcolors);
}

export {choice};