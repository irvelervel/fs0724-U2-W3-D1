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

// la sintassi a classe altro non è che uno SUGAR COATING di una funzione costruttore

// però le classi in realtà permettono di fare delle cose per cui le normali
// funzioni costruttore non erano state pensate...

// ESTENSIONE DI CLASSE
// estendere una classe da un'altra permette di RIUTILIZZARE molte delle caratteristiche
// della classe originale al fine di NON doverle ripetere una nuova volta nella classe
// dell'oggetto più specifico

class HumanBeing {
  constructor(_hairColor, _intelligence, _height, _weight) {
    this.hairColor = _hairColor
    this.intelligence = _intelligence
    this.height = _height
    this.weight = _weight
  }

  greet() {
    return 'CIAO! sono un essere umano generico'
  }
}

const human1 = new HumanBeing('blonde', 75, 170, 75)
const human2 = new HumanBeing('brown', 77, 165, 65)

class Developer extends HumanBeing {
  // questa classe Developer estende da HumanBeing, questo significa che
  // erediterà TUTTE le proprietà di HumanBeing automaticamente
  // è possibile estendere una classe a partire da SOLAMENTE un'altra classe
  // nel nostro caso la classe Developer è definita SOTTO-CLASSE di HumanBeing
  // nel nostro caso la classe HumanBeing è definita SUPER-CLASSE di Developer
  constructor(
    _hairColor,
    _intelligence,
    _height,
    _weight,
    _knownLanguages,
    _yearsOfExperience
  ) {
    // super() rappresenta l'invocazione del costruttore di HumanBeing, la mia SUPER-CLASSE
    super(_hairColor, _intelligence, _height, _weight)
    // ora aggiungo le proprietà che rendono Developer un particolare essere umano
    this.knownLanguages = _knownLanguages
    this.yearsOfExperience = _yearsOfExperience
  }

  greet() {
    return super.greet() + ' ma non solo! sono anche uno sviluppatore'
    // ho personalizzato l'invocazione di greet() negli oggetti di classe Developer
  }
}
// un Developer ha anche le seguenti proprietà:
// knownLanguages // <-- array di stringhe
// yearsOfExperience // <-- anni di esperienza

const dev1 = new Developer('ginger', 85, 175, 85, ['HTML', 'CSS', 'JS'], 2)
console.log('DEV1', dev1.greet())

class VideogameDeveloper extends Developer {
  constructor(
    _hairColor,
    _intelligence,
    _height,
    _weight,
    _knownLanguages,
    _yearsOfExperience,
    _mostLikedEngine
  ) {
    super(
      _hairColor,
      _intelligence,
      _height,
      _weight,
      _knownLanguages,
      _yearsOfExperience
    )
    // abbiamo appena creato un Developer
    this.mostLikedEngine = _mostLikedEngine
    // ora questa proprietà lo rende diverso dagli sviluppatori "generici"
  }

  greet() {
    return super.greet() + ' di videogiochi.'
  }
}

// lo sviluppatore di videogiochi ha in particolare una competenza su Unity/UE
// avrà una proprietà particolare che si chiama mostLikedEngine

const gameDev1 = new VideogameDeveloper(
  'black',
  90,
  180,
  90,
  ['C#', 'JSON'],
  4,
  'Unity'
)

console.log('gameDev1', gameDev1)
console.log(gameDev1.greet())
