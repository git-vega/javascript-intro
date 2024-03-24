/* Die Objekt-Destrukturierung ist eine praktische Funktion in JavaScript, die es ermöglicht, 
   Eigenschaften aus Objekten in separate Variablen zu extrahieren. 
   Dies kann den Code sauberer und lesbarer machen, insbesondere wenn Sie auf viele Eigenschaften eines Objekts zugreifen müssen.

Syntax der Objekt-Destrukturierung
Die Grundsyntax sieht folgendermaßen aus:
*/

const objekt = { a: 1, b: 2, c: 3 };
const { a, b, c } = objekt;
console.log(a); // Gibt 1 aus
console.log(b); // Gibt 2 aus
console.log(c); // Gibt 3 aus


/* Beispiel 1: Einfache Destrukturierung
Angenommen, Sie haben ein Objekt, das Benutzerdaten enthält, und Sie möchten auf bestimmte Eigenschaften zugreifen: */

const benutzer = {
  name: "Max Mustermann",
  alter: 28,
  wohnort: "Berlin"
};

// Destrukturierung
const { name, alter , wohnort} = benutzer;

console.log(name); // Gibt "Max Mustermann" aus
console.log(alter); // Gibt 28 aus
console.log(wohnort); // Gibt "Berlin" aus

/* Beispiel 2: Destrukturierung mit neuen Variablennamen
Wenn Sie die Eigenschaften in Variablen mit anderen Namen extrahieren möchten, können Sie die Syntax : neuerName verwenden: */

const benutzer1 = {
  name: "Max Mustermann",
  alter: 28
};

// Destrukturierung mit neuen Variablennamen
const { name: benutzerName, alter: benutzerAlter } = benutzer;

console.log(benutzerName); // Gibt "Max Mustermann" aus
console.log(benutzerAlter); // Gibt 28 aus

/* Beispiel 3: Destrukturierung und Standardwerte
Sie können Standardwerte für den Fall definieren, dass die entsprechende Eigenschaft im Objekt nicht existiert: */

const benutzer2 = {
  name2: "Max Mustermann",
  alter2: 28
};

// Destrukturierung mit Standardwerten
const { name2, wohnort2 = "Nicht angegeben" } = benutzer2;

console.log(name2); // Gibt "Max Mustermann" aus
console.log(wohnort2); // Gibt "Nicht angegeben" aus, da `wohnort` nicht im Objekt existiert

/* Beispiel 4: Destrukturierung verschachtelter Objekte
Bei Objekten, die verschachtelte Objekte enthalten, können Sie die verschachtelten Eigenschaften ebenfalls destrukturieren: */

const benutzer4 = {
  name4: "Max Mustermann",
  adresse4: {
      stadt: "Berlin",
      plz: "10115"
  }
};

// Destrukturierung verschachtelter Objekte
const { 
  name4,
  adresse4: { stadt, plz }
} = benutzer4;

console.log(name4); // Gibt "Max Mustermann" aus
console.log(stadt); // Gibt "Berlin" aus
console.log(plz); // Gibt "10115" aus

/*Diese Beispiele verdeutlichen, wie die Objekt-Destrukturierung in JavaScript Ihren Code vereinfachen und die Lesbarkeit verbessern kann, 
insbesondere bei der Arbeit mit komplexen Datenstrukturen.*/