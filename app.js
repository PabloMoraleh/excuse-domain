  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com','.net','.us','.io']

  for (let i = 0; i < pronoun.length; i++) {
   // console.log(pronoun[i]); the
    for (let j = 0; j < adj.length; j++) {
    //console.log(adj[j]); great
    for (let s = 0; s < noun.length; s++) {
        //console.log(noun[s]); jogger
        for (let d = 0; d < domain.length; d++) {
            console.log(pronoun[i]+adj[j]+noun[s]+domain[d]);           
        }       
    }    
  }
  }