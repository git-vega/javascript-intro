/*Um die Nutzung von Exporten in JavaScript zu demonstrieren, zeige ich dir, wie man verschiedene Arten von Daten wie Variablen, Funktionen und Klassen aus einem JavaScript-Modul exportiert. Wir werden sowohl benannte Exporte als auch Standardexporte betrachten.

Benannte Exporte
Benannte Exporte sind nützlich, wenn du mehrere Dinge aus einem Modul exportieren möchtest. Jedes exportierte Element kann dann mit seinem spezifischen Namen importiert werden.

In diesem Beispiel exportieren wir eine Konstante pi, eine Funktion summe und eine Klasse Rechner aus dem Modul mathUtils.js. Jeder dieser Exporte ist ein benannter Export.

Beispiel:

mathUtils.js

*/
// Exportieren einer Konstante
export const pi = 3.14159;

// Exportieren einer Funktion
export function summe(x, y) {
    return x + y;
}

// Exportieren einer Klasse
export class Rechner {
    multiplizieren(x, y) {
        return x * y;
    }
}

//errstelle conlose.log für die obere Aufgabe
console.log(pi);
console.log(summe(1, 2));
console.log(new Rechner().multiplizieren(3, 4));