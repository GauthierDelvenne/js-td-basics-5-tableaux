/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];

// 2. Parcourez ce tableau pour afficher les films qu'il contient :
//    1°) avec une boucle for
console.log("%cAvec une boucle for :", "color: red;");
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

//    2°) avec une boucle while
console.log("%cAvec une boucle while :", "color: red;");
let j=0;
while (j<films.length){
    console.log(films[j]);
    j++;
}
//    3°) avec une boucle for of
console.log("%cAvec une boucle for of :", "color: red;");
for (const film of films) {
    console.log(film);
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
console.log("%cAvec une boucle for :", "color: red;");
for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//    2°) avec une boucle while
console.log("%cAvec une boucle while :", "color: red;");
let k=0;
while (k<john.length){
    console.log(john[k]);
    k++;
}
//    3°) avec une boucle for of
console.log("%cAvec une boucle for of :", "color: red;");
for (const johnElement of john) {
    console.log(johnElement);
}

// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.
console.table("Voici mon tableau de nombres :", nombres);

// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.
const carres = [];

// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.
nombres.forEach(function (nombre) {
    carres.push(nombre*nombre);
});
// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.
console.table("Voici mon tableau de nombres au carré :", carres);

