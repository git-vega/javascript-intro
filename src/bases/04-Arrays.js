




// Ursprüngliches Array mit Zahlen
const zahlen = [1, 2, 3, 4, 5];

// Verwenden der map-Methode, um jedes Element zu verdoppeln
const verdoppelteZahlen = zahlen.map(zahl => zahl * 2);

// Ausgabe des neuen Arrays
console.log(verdoppelteZahlen); // [2, 4, 6, 8, 10]





const buecher = [
    { titel: "Der Hobbit", autor: "J.R.R. Tolkien", edad: "34" },
    { titel: "Die Foundation-Trilogie", autor: "Isaac Asimov", edad: "44" },
    { titel: "Fahrenheit 451", autor: "Ray Bradbury" , edad: "54"}
  ];
  
  for (let buch of buecher) {
    console.log(`Buchtitel: ${buch.titel}, Autor: ${buch.autor}, edad: ${buch.edad}`);
  }
  

