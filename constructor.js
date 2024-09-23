// la funzione costruttore
// la funzione costruttore permette una facile creazione in serie di n oggetti
// dotati però tutti delle stesse caratteristiche, della stessa "struttura"

const person1 = {
  firstName: 'Mario',
  lastName: 'Rossi',
  address: 'Via Roma 1',
  email: 'mariorossi@gmail.com',
  showName: function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  },
}

console.log(person1.showName())

// immaginate di voler creare una struttura dati che "generalizzi" person1
// e vi permetta di creare tanti oggetti in serie tutti uguali ma con dati diversi
// D R Y -> Don't Repeat Yourself

// PascalCase
const Person = function () {
  // questa è una funzione COSTRUTTORE, è uno STAMPINO per oggetti
  // vado a inserire le PROPRIETÀ e i METODI che intendo generalizzare in questa
  // funzione costruttore

  // questo this fa riferimento all'ISTANZA creata, cioè al nuovo oggetto Person che verrà creato
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.showName = function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  }
}

const p1 = new Person()
console.log('P1', p1)
p1.firstName = 'Mario'
p1.lastName = 'Bros'
p1.address = 'Mushroom Road 1'
p1.email = 'mariobros@nintendo.com'

console.log(p1.showName())
// funziona! però una funzione costruttore fatta così ci obbliga a dover
// poi riempire i valori delle proprietà prefissate di volta in volta...

// una miglioria consisterebbe nell'invocare una funzione costruttore con
// dei PARAMETRI, al fine di condensare la creazione del "guscio vuoto" e le
// operazioni di assegnazione dei valori alle proprietà in un colpo solo!

const NamedPerson = function (
  _firstname,
  _lastName,
  _address,
  _email = 'generic@nintendo.com' // valore di default del parametro
) {
  this.firstName = _firstname
  this.lastName = _lastName
  this.address = _address
  this.email = _email
  this.showName = function () {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  }
}

const np1 = new NamedPerson(
  'Luigi',
  'Bros',
  'Mansion Road 1',
  'luigibros@nintendo.com'
)

console.log('NP1', np1)

const np2 = new NamedPerson(
  'Peach',
  'Toadstool',
  'Castle Avenue 1',
  'peachtoadstool@nintendo.com'
)

const np3 = new NamedPerson('Bowser', 'Koopa', 'Lava Street 1')
console.log('np3', np3) // senza il 4 parametro! prenderà il valore di default

// questo grossomodo è il concetto fondamentale :)
// con il passare degli anni però anche in JS è stato introdotto il concetto
// di "classe", ovvero la classica "fabbrica" di oggetti presente in linguaggi
// più OOP come Java e C#
// esploriamo questa nuova sintassi nel file class.js
