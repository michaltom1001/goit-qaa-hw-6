// Zadanie 1

// Słowo kluczowe this odnosi się do obiektu, w którym aktualnie wykonywany jest kod. 
// This wskazuje na obiekt, który wywołuje daną funkcję lub metodę.

// Przykład 1

class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Cześć, nazywam się ${this.name}`); // this.name odnosi się do imienia bieżącego obiektu Person
    }
  }
  
  const person1 = new Person("Jan Kowalski");
  person1.greet(); // Wyświetli "Cześć, nazywam się Jan Kowalski"

//   Przykład 2

const vehicle = {
    name: "Hyundai",
    showName() {
        console.log(this.name); // this.name odnosi się do nazwy bieżącego obiektu vehicle
    }
}
vehicle.showName(); // Output: Hyundai

// Zadanie 2

// Tworzenie obiektu

const person = {
    username: "Maciej",
    showName() {
        console.log(this.name); // this odnoszące się do obiektu person
    }
}
person.showName(); // Output: Maciej

// Zadanie 3

// Tworzymy obiekt bookshelf

const bookshelf = {
    authors: [],
    getAuthors() {
        return this.authors; // Zwraca tablicę autorów
    },
    
    addAuthor(authorName) {
        this.authors.push(authorName); // Dodaje autora
    }
}

// Dodawanie autorów

bookshelf.addAuthor("Andrzej Spakowski");
bookshelf.addAuthor("George R.R. Martin");

// Pobranie i wyświetlenie listy autorów

const authors = bookshelf.getAuthors();
console.log(authors); // Output: ["Andrzej Sapkowski", "George R.R. Martin"]