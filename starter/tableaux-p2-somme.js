/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/

const values = [11, 3, 7, 2, 9, 10];
console.log("Voici mon tableau de nombres :");
for (const value of values) {
    console.log(value);
}


// forEach
let somme = 0;
values.forEach(function (value) {
    somme += value;
});
console.log("La somme des nombres de mon tableau est", somme);
// mettre le console.log dans la function applique la phrase a chaque nombres


//for/of
let somme2 = 0;

for (let value of values) {
    somme2 += value;
}
console.log("La somme des nombres de mon tableau est", somme2);


//BONUS
let somme3 = 0;
let message= '';
for (let i = 0; i < values.length; i++) {
    message += values[i];
    if (i < values.length - 1){
        message += '+';
    }
}


// 3. Calculer la somme avec une boucle 'for/of'
for (let value of values) {
    somme3 += value;
}

// 4. Afficher le message final
message += " = " + somme3;
console.log(message);