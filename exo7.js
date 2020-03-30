//Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".

let prenoms = ['Alice', 'Julie', 'Hélène','Alice', 'Marie'];

//1. Supprimer les doublons du tableau "prenoms"
for(i = 0; i < prenoms.length; i++) {
    for (j = 0; j < prenoms.length; j++){
      if( prenoms[i] === prenoms[j]){
        // test //console.log('doublon!');
        prenoms.splice([i],1);
        console.log(prenoms);
        
      }
    }
  }
