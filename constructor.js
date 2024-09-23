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
