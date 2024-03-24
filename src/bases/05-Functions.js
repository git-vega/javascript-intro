function sageHallo() {
  console.log('Hallo, Welt!');
}


const sageAufWiedersehen = function() {
  console.log('Auf Wiedersehen, Welt!');
};

const addiere = (a, b) => a + b;


sageHallo(); // Ruft die Funktion sageHallo auf
const summe = addiere(5, 3); // Ruft die Funktion addiere mit den Argumenten 5 und 3 auf
console.log(summe); // Gibt aus: 8


function grüße(name) {
  console.log('Hallo, ' + name + '!');
}

grüße('Alice'); // Gibt aus: Hallo, Alice!


function addiere1(a, b) {
  return a + b;
}

const summe1 = addiere1(10, 5);
console.log(summe1); // Gibt aus: 15



const sageHallo = () => {
  console.log('Hallo, Welt!');
}

sageHallo(); // Gibt aus: Hallo, Welt!

const sageHallo = () => {
  console.log('Hallo, Welt!');
}

sageHallo(); // Gibt aus: Hallo, Welt!


const zahlen = [1, 2, 3, 4];
const verdoppelt = zahlen.map(zahl => zahl * 2);
console.log(verdoppelt); // Gibt [2, 4, 6, 8] aus


const größereZahl = (a, b) => {
  if (a > b) {
      return a;
  } else {
      return b;
  }
};
console.log(größereZahl(5, 10)); // Gibt 10 aus


const zahlenArray = [3, 10, 18, 20];
const gefiltert = zahlenArray.filter(zahl => zahl > 10);
console.log(gefiltert); // Gibt [18, 20] aus
