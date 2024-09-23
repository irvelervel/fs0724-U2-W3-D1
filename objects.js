// OGGETTI IN JS
const house = {
  color: 'lightyellow',
  numberOfFloors: 3,
  gardenSqm: 30,
  families: ['rossi', 'bianchi'],
  explode: function () {
    console.log('BOOM!')
  },
}

console.log(house.families[1])
console.log(house.numberOfFloors)
house.explode() // esegue il console log

console.log(house.__proto__) // Object { // con dentro tutte le generiche proprietà degli oggetti }

let person1 = {
  firstName: 'Mario',
  lastName: 'Rossi',
  test: () => {
    console.log('THIS DENTRO FUNZIONE FRECCIA', this)
    // una funzione freccia NON possiede un proprio "this"
    // quindi eredita quello del contesto circostante, in questo caso "Window"
  },
  sayHello: function () {
    console.log('THIS DENTRO FUNZIONE NORMALE', this)
    return 'Ciao, io mi chiamo ' + this.firstName
  },
}

// person1.test()
// console.log(person1.sayHello())

const person2 = person1 // non è una vera copia!
person1 = null
person2.sayHello() // continua a funzionare perchè "this" all'interno del metodo
// punta sempre all'oggetto stesso!

// sayHello() // non funziona!

// andrea() // :O
// function andrea() {
//     // HOISTING
//     return 'Ciao mi chiamo Andrea'
// }

const stefano = function () {
  // NON C'È HOISTING QUI
  return 'Mi chiamo Stefano'
}

stefano()

// limitazioni della notazione letterale per scrivere gli oggetti in JS?
// diventa fastidioso quando devo scrivere TANTI oggetti dotati della stessa "struttura"

// verrebbe utile anche a noi, che scriviamo JS, la capacità di creare "stampini",
// "fabbriche", "costruttori"... in JS si possono creare oggetti in serie
// tramite le "funzioni costruttore"
