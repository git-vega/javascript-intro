

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Wandelt die Antwort in JSON um
  .then(data => {
    console.log(data);
  
  if (data && data.length > 0 && data[0].hasOwnProperty('body')) {
    console.log(data[0].body);
  } else {
    console.error('Kein Datenobjekt oder kein body im ersten Objekt gefunden.');
  }
})
.catch(error => console.error('Fehler beim Abrufen der Daten:', error));


  
  


