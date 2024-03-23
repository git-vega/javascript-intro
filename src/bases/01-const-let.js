
//bitte erstellt einen Beispielcode mit var
var x = 10;
console.log(x);

//bitte erstellt einen Beispielcode mit let
let y = 20;
console.log(y);


//bitte erstellt einen Beispielcode mit const
const z = 30;
console.log(z);


// Beispiel für var
console.log("Beispiel für var:");
var varExample = "Außerhalb der Schleife";
console.log(varExample); // Ausgabe: Außerhalb der Schleife

for (var varExample = 0; varExample < 1; varExample++) {
    console.log(varExample); // Ausgabe: 0
}
console.log(varExample); // Ausgabe: 1 (var hat einen funktionsweiten Geltungsbereich, wurde also überschrieben)




// Beispiel für let
console.log("\nBeispiel für let:");
let letExample = "Außerhalb der Schleife";
console.log(letExample); // Ausgabe: Außerhalb der Schleife

for (let letExample = 0; letExample < 1; letExample++) {
    console.log(letExample); // Ausgabe: 0
}
console.log(letExample); // Ausgabe: Außerhalb der Schleife (let hat einen Block-Geltungsbereich, bleibt also unverändert)



// Beispiel für const
console.log("\nBeispiel für const:");
const constExample = "Konstante Wert";
console.log(constExample); // Ausgabe: Konstante Wert

// Versuchen, constExample einen neuen Wert zuzuweisen, würde einen Fehler verursachen
// constExample = "Neuer Wert"; // TypeError: Zuweisung zu einer Konstanten Variable.

// Demonstration der Unveränderlichkeit von const mit Objekten
const constObject = { key: "Startwert" };
console.log(constObject.key); // Ausgabe: Startwert

// Ändern des Wertes innerhalb des Objekts ist erlaubt
constObject.key = "Geänderter Wert";
console.log(constObject.key); // Ausgabe: Geänderter Wert

// Jedoch ist die Zuweisung eines neuen Objekts oder Wertes zu constObject nicht erlaubt
// constObject = { key: "Anderes Objekt" }; // TypeError: Zuweisung zu einer Konstanten Variable.




// Initialisierung einer let-Variable außerhalb einer for-Schleife
let außen = "Ich bin außerhalb der Schleife";

console.log(außen); // Ausgabe: Ich bin außerhalb der Schleife

// Verwendung von let innerhalb einer for-Schleife
for (let i = 0; i < 3; i++) {
    let innerhalb = "Ich bin innerhalb der Schleife";
    console.log(`Durchlauf ${i}: ${innerhalb}`);
}

// Versuch, auf die Variable 'innerhalb' außerhalb der Schleife zuzugreifen
// console.log(innerhalb); // Dies würde einen Fehler verursachen: ReferenceError: innerhalb is not defined

// Die Variable 'i' aus der Schleife ist ebenfalls nicht außerhalb der Schleife zugänglich
// console.log(i); // Dies würde einen Fehler verursachen: ReferenceError: i is not defined

// Zeigt, dass 'außen' immer noch den ursprünglichen Wert hat
console.log(außen); // Ausgabe: Ich bin außerhalb der Schleife



