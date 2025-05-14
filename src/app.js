import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Arrays with the content
  const pronoun = ['the', 'our', 'us', 'my'];
  const adj = ['skibidi', 'mewing', 'rizzler', 'based'];
  const noun = ['Balatro', 'Ibai', 'Solaire', 'JohnFallout'];
  const extension =['.net', '.cat', '.com', '.io']
  
  //For loop
  for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let  n= 0; n< noun.length;n++) {
      for (let e = 0; e < extension.length; e++) {
        const domain = pronoun[p] + adj[a] + noun[n] + extension[e];
        console.log(domain);
      }
    }
  }
}
}

