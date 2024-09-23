// le classi non sono altro che un ALTRO MODO di scrivere una funzione costruttore

class NamedPerson {
  constructor(_firstName, _lastName, _address, _email) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.address = _address
    this.email = _email
    // di solito nel constructor si mettono le proprietà che recuperano
    // il loro valore dinamicamente dai parametri
  }

  // se ho una proprietà il cui valore NON deriva da parametri, di solito
  // la si inserisce nella classe FUORI dal costruttore, poichè il suo
  // valore non è parametrico
  numberOfLegs = 2

  // poichè il metodo sayHello NON deriva direttamente da parametri, non cambia
  // da oggetto in oggetto, lo inseriamo QUI, dopo il costruttore
  sayHello() {
    return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
  }
}

// l'invocazione della classe è IDENTICA all'invocazione della f. costruttore!
const ist1 = new NamedPerson(
  'Luigi',
  'Bros',
  'Mansion Road 1',
  'luigibros@nintendo.com'
)

console.log('IST1', ist1)
