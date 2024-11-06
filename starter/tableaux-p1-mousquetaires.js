/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
1. Créez un tableau nommé 'mousquetaires' contenant les noms des trois mousquetaires, Athos, Porthos et Aramis.
2. Utilisez une boucle 'for' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Voici les Trois Mousquetaires :".
3. Ajoutez au tableau le mousquetaire d'Artagnan.
4. Utilisez la méthode 'forEach()' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Ils sont quatre à présent :".
5. Supprimez Aramis du tableau.
6. Utilisez une boucle 'for-of' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Le pauvre Aramis est mort…".
*/
const mousquetaires = ['Athos', 'Porthos', 'Aramis'];
//2.
console.log("%cVoici les Trois Mousquetaires :", "color : red;");
for (const mousquetaire of mousquetaires) {
    console.log(mousquetaire);
}
// 3.
mousquetaires.push('d’Artagnan');
//4.
console.log("%cIls sont quatre à présent :", "color : red;")
mousquetaires.forEach(mousquetaire => console.log(mousquetaire));
//5.
mousquetaires.splice(2,2,'d’Artagnan')
//6.
console.log("%cLe pauvre Aramis est mort…", "color : red;");
for (const mousquetaire of mousquetaires) {
    console.log(mousquetaire);
}
