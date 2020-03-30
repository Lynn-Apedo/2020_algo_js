// Faire une fonction qui retourne true. 
function color(colorName){
    if(color = 'green'){
        return true;
        //console.log('true');
    } else {
        return false;
        //console.log('false');
    }
}
color('red');

//Faire une fonction qui prend en paramètre une chaîne de caractères et qui retourne cette même  chaîne. 
function sayHello(str){
    console.log(str);
  }
  sayHello('Namasté');
  
  //Faire une fonction qui prend en paramètre deux chaînes de caractères et qui revoit la concaténation de ces deux chaînes 
  function sayHelloTo(strHello, str){
    console.log(strHello + ' ' + str);
  }
  sayHelloTo('Namasté', 'Little Flower');
  
  //Faire une fonction qui prend en paramètre deux nombres. 
  function nbSquat(nbByDay,nbByMounth){
     return nbByDay * nbByMounth;
  }
  let total = nbSquat(10,3);
  console.log('Those days I did ' + total + ' squats, I\'m getting better !');
  
  //La fonction doit retourner : 
  // 'Le premier nombre est plus grand' si le premier nombre est plus grand que le deuxième 
  //'Le premier nombre est plus petit' si le premier nombre est plus petit que le deuxième 
  //'Les deux nombres sont identiques' si les deux nombres sont égaux
  function nb(nb1,nb2) {
    if (nb1 > nb2){
      console.log('Le premier nombre est plus grand');
    }  else if (nb1 < nb2) {
      console.log('Le premier nombre est plus petit');
    }  else if (nb1 == nb2) {
      console.log('Les deux nombres sont identiques');
    }
  }
  nb(1,3);  
