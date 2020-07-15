const words = ["kill", "feel"]



function choseword() {
 let ww= Math.floor(Math.random() * words.length);
 
 return words[ww];
}

export { choseword }; 