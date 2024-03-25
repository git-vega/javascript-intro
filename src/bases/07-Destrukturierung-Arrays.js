/*Die Destrukturierung von Arrays in JavaScript ermöglicht es, Werte aus Arrays direkt in Variablen zu extrahieren, was den Code kürzer und lesbarer macht. Hier erkläre ich, wie man die Destrukturierung von Arrays verwendet, mit einigen praktischen Beispielen.

Einfaches Beispiel
Angenommen, Sie haben ein Array mit drei Werten und möchten diese Werte in separate Variablen extrahieren: */

const zahlen = [1, 2, 3, 4];
const [eins, zwei, drei, vier] = zahlen;

console.log(eins); // 1
console.log(zwei); // 2
console.log(drei); // 3
console.log(vier); // 4


/* Überspringen von Werten
Wenn Sie nur an bestimmten Werten des Arrays interessiert sind, können Sie mit Platzhaltern (Leerstellen) andere Werte überspringen:

*/
const fruechte = ["Apfel", "Banane", "Orange", "Mango"];
const [ersteFrucht, , dritteFrucht] = fruechte;

console.log(ersteFrucht); // "Apfel"
console.log(dritteFrucht); // "Orange"

/*Restoperator verwenden
Sie können den Restoperator (...) verwenden, um die restlichen Arrayelemente in ein neues Array zu packen: */

const zahlen1 = [1, 2, 3, 4, 5];
const [ersteZahl, zweiteZahl, ...rest] = zahlen1;

console.log(ersteZahl); // 1
console.log(zweiteZahl); // 2
console.log(rest); // [3, 4, 5]

/*Standardwerte
Sie können Standardwerte für Variablen angeben, falls das Array weniger Elemente enthält, als Variablen deklariert sind:

*/
const meinArray = [10];
const [a = 1, b = 2] = meinArray;

console.log(a); // 10 (aus dem Array)
console.log(b); // 2 (Standardwert)


/*Verschachtelte Arrays
Bei verschachtelten Arrays können Sie Destrukturierung ineinander verschachteln, um auf tiefer liegende Werte zuzugreifen: */
const farben = ["rot", ["grün", "dunkelgrün"], "blau"];
const [rot, [gruen, dunkelgruen]] = farben;

console.log(rot); // "rot"
console.log(gruen); // "grün"
console.log(dunkelgruen); // "dunkelgrün"


/*Parameter in Funktionen
Destrukturierung kann auch in Funktionen verwendet werden, um direkt auf Elemente eines Array-Parameters zuzugreifen: */
function summeUndProdukt([a, b]) {
    return [a + b, a * b];
  }
  
  const [summe, produkt] = summeUndProdukt([2, 3]);
  
  console.log(summe); // 5
  console.log(produkt); // 6

  